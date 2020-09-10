import Layout from '@/enum/layout';
import InsertType from '@/enum/schema/widget-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import InsertInfo from '@/interfaces/insert-info';
import ListItemOption from '@/interfaces/list-item-option';
import MessagePayload from '@/interfaces/message-payload';
import ComponentSchema, { EventSchemaCollection, StateSchemaCollection } from '@/interfaces/schema/component.schema';
import PageSchema from '@/interfaces/schema/page.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import DataMappingService from '@/services/data-mapping.service';
import BasicFormService from '@/services/forms/basic-form.service';
import { MessageService } from '@/services/message.service';
import SchemaService from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-tree-widget',
  templateUrl: './tree-widget.component.html',
  styleUrls: ['./tree-widget.component.less'],
})
export class TreeWidgetComponent implements OnInit, OnDestroy {
  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
    private schemaService: SchemaService,
    private domSanitizer: DomSanitizer,
    private msgService: MessageService,
    private nzMessageService: NzMessageService
  ) {}

  @HostBinding('style')
  get hostStyles(): SafeStyle {
    let styles: DynamicObject = {
      'flex-shrink': 0,
    };
    // TODO 用其他生命周期优化下
    if (this.data.schema.type === InsertType.container) {
      styles = this.basicFormService.convertSchemaToStyles(this.data.schema);
      if (this.parent && this.parent.schema.styles.display.value === Layout.flex) {
        styles['flex-shrink'] = 0;
      }
      if (this.selected) {
        styles.border = '2px dashed #396fff';
        styles['background-color'] = 'rgb(167, 190, 250)';
      }
      if (this.isEmpty) {
        styles.position = 'relative';
      }
    }
    return this.domSanitizer.bypassSecurityTrustStyle(this.basicFormService.convertStyleDicToStr(styles));
  }

  @HostBinding('class.widget-empty')
  get isEmpty(): boolean {
    // 空容器
    return this.widgetSchema.type === InsertType.container && !('children' in this.widgetSchema);
  }

  get selected() {
    return this.selectedSchema && this.selectedSchema.id === this.widgetSchema?.id;
  }

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  get widgetSchema() {
    return this.data?.schema;
  }

  @Input()
  componentSchema: ComponentSchema;

  @Input()
  componentStates: DynamicObject;

  @Input()
  data: WidgetTreeNode;

  eventHandlers: (() => {})[] = [];
  // event schema 的副本引用，这里用它是为了找到里边的 stateName，然后用来调用 stateFunctions 里边对应的函数
  events: EventSchemaCollection;

  @Input()
  listItemOption: ListItemOption;

  pageSchema: PageSchema;
  pageSchemaSubscription: Subscription;
  // 父节点的 data（根元素的 parent 为 null)
  @Input()
  parent: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  selectedMaterialSubscription: Subscription;
  selectedSchema: any;
  stateCtx: DynamicObject;
  // component 里边根据 event schema 生成的函数字典（仅供预览使用，所以不能把它放到 schema 里边去）
  stateFunctions: {
    [key: string]: () => {};
  };
  // state schema 的副本引用
  states: StateSchemaCollection;
  subscription: Subscription;

  @HostListener('dndDrop', ['$event'])
  onDrop($event: any) {
    $event.event.preventDefault();
    $event.event.stopImmediatePropagation();
    const schema = this.schemaService.generateSchema($event.data.type);
    console.log('schema dropped: ', schema);
    console.log('current container id: ', this.data.schema.id);
    this.insertMaterial({
      type: $event.data.type,
      data: schema,
    });
  }

  @HostListener('click')
  handleSelectingMaterial() {
    if (this.selectedSchema?.id === this.widgetSchema?.id) {
      this.msgService.unselectWidget();
    } else {
      this.msgService.selectWidget(this.widgetSchema);
    }
  }

  handleClickEvent() {
    for (let i = 0, l = this.eventHandlers.length; i < l; i++) {
      const handler = this.eventHandlers[i];
      const result = handler.call(this, this.stateCtx);
      this.msgService.sendMessage({
        type: 'outputState',
        payload: result,
      });
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
            states.forEach((stateName) => {
              if (this.states[stateName]) {
                this.eventHandlers = this.eventHandlers.concat(
                  Object.entries(this.stateFunctions)
                    .filter(([key]) => {
                      return key === stateName;
                    })
                    .map((item) => item[1])
                );
              } else {
                this.nzMessageService.error(`不存在的事件名:${stateName}`);
              }
            });
          }
        }
      });
    }
  };

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.pageSchemaSubscription) {
      this.pageSchemaSubscription.unsubscribe();
    }
    if (this.selectedMaterialSubscription) {
      this.selectedMaterialSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    if (this.listItemOption) {
      this.stateCtx = this.dataMappingService.output(
        {
          ref: this.listItemOption.listDataRef,
        },
        this.props?.dataSourceSchema,
        this.listItemOption
      );
      return;
    }
    this.subscription = this.msgService.message.subscribe(this.handleMessage);
    this.pageSchemaSubscription = this.msgService.pageSchemaMsg.subscribe((schema: PageSchema) => {
      this.pageSchema = schema;
    });
    this.selectedMaterialSubscription = this.msgService.selectedSchemaMsg.subscribe((data: any) => {
      this.selectedSchema = data;
    });
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

  // TODO remove any
  insertMaterial(insertInfo: InsertInfo) {
    this.msgService.insertWidget(insertInfo, this.data.schema.id);
  }
}
