import Layout from '@/enum/layout';
import InsertType from '@/enum/schema/widget-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import WidgetTreeNode from '@/interfaces/tree-node';
import { DataMappingService } from '@/services/data-mapping.service';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { SchemaService } from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MessageService } from '@/services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-tree-widget',
  templateUrl: './tree-widget.component.html',
  styleUrls: ['./tree-widget.component.less'],
})
export class TreeWidgetComponent implements OnInit {
  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
    private schemaService: SchemaService,
    private domSanitizer: DomSanitizer,
    private messageService: MessageService
  ) {}

  @Input()
  data: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  // 父节点的 data（根元素的 parent 为 null)
  @Input()
  parent: WidgetTreeNode;

  @Input()
  listItemOption: ListItemOption;

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

  useEvent: boolean = false;

  // TODO x需要重构上下文的类型，光靠对象描述是不够
  stateCtx: DynamicObject;

  ngOnInit() {
    if (!this.listItemOption) {
      return;
    }
    this.stateCtx = this.dataMappingService.output({
      ref: this.listItemOption.listDataRef
    }, this.props?.dataSourceSchema, this.listItemOption);
    this.messageService.message.subscribe(this.handleMessage);
    console.log('listItemOption: ', this.stateCtx);
  }

  handleClickEvent() {
    // TODO 这里实现点击事件
    console.log('clicked: ', this.stateCtx)
  }

  /*
   * 处理接收到的广播消息
   */
  handleMessage = (payload: DynamicObject) => {
    if (payload) {
      Object.entries(payload).forEach(([eventName, eventSchema]) => {

      });
    }
  }

  output(key: string) {
    const { data, operation } = this.data?.schema?.dataMapping[key];
    if (operation) {
      return this.dataMappingService.output(operation, this.props?.dataSourceSchema, this.listItemOption);
    }
    return data;
  }

  trackByItems(index: number, item: any) {
    return item.id;
  }
}
