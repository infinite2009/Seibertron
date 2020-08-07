import Layout from '@/enum/layout';
import InsertType from '@/enum/schema/widget-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import MessagePayload from '@/interfaces/message-payload';
import ComponentSchema, { EventSchemaCollection, StateSchemaCollection } from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import DataMappingService from '@/services/data-mapping.service';
import BasicFormService from '@/services/forms/basic-form.service';
import SchemaService from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MessageService } from '@/services/message.service';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-tree-widget',
  templateUrl: './tree-widget.component.html',
  styleUrls: ['./tree-widget.component.less'],
})
export class TreeWidgetComponent implements OnInit, OnDestroy, OnChanges {
  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
    private schemaService: SchemaService,
    private domSanitizer: DomSanitizer,
    private messageService: MessageService,
    private nzMessageService: NzMessageService,
  ) {}

  @HostBinding('style')
  get hostStyles(): SafeStyle {
    // TODO 用其他生命周期优化下
    if (this.data.schema.type === InsertType.container) {
      let styleStr = this.basicFormService.convertSchemaToStyleStr(this.data.schema);
      if (this.parent && this.parent.schema.styles.display.value === Layout.flex) {
        styleStr += 'flex-shrink: 0';
      }
      return this.domSanitizer.bypassSecurityTrustStyle(styleStr);
    }
    return this.domSanitizer.bypassSecurityTrustStyle('flex-shrink: 0');
  }

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  @Input()
  data: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  // 父节点的 data（根元素的 parent 为 null)
  @Input()
  parent: WidgetTreeNode;

  @Input()
  componentSchema: ComponentSchema;

  @Input()
  componentStates: DynamicObject;

  @Input()
  listItemOption: ListItemOption;

  subscription: Subscription;

  stateCtx: DynamicObject;

  // state schema 的副本引用
  states: StateSchemaCollection;

  // component 里边根据 event schema 生成的函数字典（仅供预览使用，所以不能把它放到 schema 里边去）
  stateFunctions: {
    [key: string]: () => {}
  };

  // event schema 的副本引用，这里用它是为了找到里边的 stateName，然后用来调用 stateFunctions 里边对应的函数
  events: EventSchemaCollection;

  eventHandlers: (() => {})[] = [];

  handleClickEvent() {
    for (let i = 0, l = this.eventHandlers.length; i < l; i++) {
      const handler = this.eventHandlers[i];
      const result = handler.call(this, this.stateCtx);
      this.messageService.sendMessage({
        type: 'outputState',
        payload: result,
      });
    }
  }

  ngOnInit() {
    if (!this.listItemOption) {
      return;
    }
    this.stateCtx = this.dataMappingService.output({
      ref: this.listItemOption.listDataRef
    }, this.props?.dataSourceSchema, this.listItemOption);
    this.subscription = this.messageService.message.subscribe(this.handleMessage);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /*
   * 处理接收到的广播消息
   */
  handleMessage = (msg: MessagePayload) => {
    const { type, payload } = msg;
    switch (type) {
      case 'event':
        this.events = payload;
        break;
      case 'state':
        this.states = payload;
        break;
      case 'stateFunctions':
        this.stateFunctions = payload;
        break;
      default:
        break;
    }
    this.eventHandlers = [];
    if (this.stateFunctions && this.states && this.events) {
      Object.entries(this.events).forEach(([, eventSchema]) => {
        const { effect, sourceWidget } = eventSchema;
        if (effect) {
          const { states } = effect;
          if (states && states.length && sourceWidget.id === this.data.schema.id) {
            states.forEach(stateName => {
              if (this.states[stateName]) {
                this.eventHandlers = this.eventHandlers.concat(Object.entries(this.stateFunctions).filter(([key]) => {
                  return key === stateName;
                }).map(item => item[1]));
              } else {
                this.nzMessageService.error(`不存在的事件名:${stateName}`)
              }
            });
          }
        }
      });
    }
  }

  output(key: string) {
    const { data, operation, state } = this.data?.schema?.dataMapping[key];
    if (this.componentStates) {
      return this.dataMappingService.outputFromState(this.componentStates, state);
    }
    if (operation) {
      return this.dataMappingService.output(operation, this.props?.dataSourceSchema, this.listItemOption);
    }
    return data;
  }

  trackByItems(index: number, item: any) {
    return item.id;
  }
}
