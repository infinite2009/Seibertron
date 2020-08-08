import { fromJS } from 'immutable';
import { v1 as uuid } from 'uuid';
import { NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import CommandType from '@/enum/command-type';
import InsertType from '@/enum/schema/widget-type.enum';
import ICommandPayload from '@/interfaces/command-payload';
import DynamicObject from '@/interfaces/dynamic-object';
import ComponentSchema from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import BasicFormService from '@/services/forms/basic-form.service';
import SchemaService from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from '@/services/message.service';
import EventSchema from '@/interfaces/schema/event.schema';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less'],
})
export class ComponentCreationComponent implements OnInit, OnChanges {
  constructor(
    private nzMessageService: NzMessageService,
    private basicFormService: BasicFormService,
    private schemaService: SchemaService,
    private messageService: MessageService,
  ) {}

  /* bindings */

  /* attributes */

  selectedKey: string;

  get selectedTreeNode(): WidgetTreeNode {
    if (this?.treeData?.length) {
      let queue = [this.treeData[0]];
      while (queue.length) {
        const currentNode = queue[0];
        if (currentNode.key === this.selectedKey) {
          console.log('selected node: ', currentNode.key);
          return currentNode;
        }
        if (currentNode.children) {
          queue = queue.concat(currentNode.children);
        }
        queue.shift();
      }
    }
    return null;
  };

  componentSchema: ComponentSchema;

  // 组件的 props ，包括数据，特定的样式，功能，事件等
  componentProps: DynamicObject = {};

  get styles() {
    if (!this.treeData) {
      return {};
    }
    return this.basicFormService.convertSchemaToStyles(this.treeData[0].schema);
  }

  treeData: WidgetTreeNode[] = [];

  /* getters and setters */

  /* methods */

  /* member methods */

  /* event handlers */
  handleTreeNodeClick($event: NzFormatEmitEvent): void {
    this.selectedKey = $event.node.key;
  }

  handleExecuteCommand($event: ICommandPayload): void {
    switch ($event.type) {
      case CommandType.insert:
        switch ($event.payload.type) {
          case InsertType.dataSource:
            this.insertDataSource($event.payload);
            break;
          case InsertType.state:
            this.insertState($event.payload);
            break;
          case InsertType.event:
            this.insertEvent($event.payload as {
              type: string;
              data: EventSchema;
            });
            break;
          default:
            this.insertContainerElement($event.payload);
            break;
        }
        break;
      default:
        break;
    }
  }

  /*
   * 保存 schema
   */
  handleSaving() {
    this.schemaService.saveSchemaToLocalStorage(this.componentSchema);
  }

  handleTreeNodeDrop(): void {
    this.schemaService.saveSchemaToLocalStorage(
      this.schemaService.convertTreeToSchema(this.treeData[0])
    );
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  /* life cycle hooks */
  async ngOnInit() {
    const { data } = await this.schemaService.fetchComponentSchema();
    if (data) {
      this.componentSchema = data;
      const treeRoot = this.schemaService.convertSchemaToTree(data.containerSchema);
      if (treeRoot) {
        this.treeData = [treeRoot];
        this.selectedKey = this.treeData[0].key;
      }
      // 广播事件数据给 widget
      this.messageService.sendMessage({
        type: 'event',
        payload: this.componentSchema.eventSchemaCollection
      });
      this.messageService.sendMessage({
        type: 'state',
        payload: this.componentSchema.stateSchemaCollection
      });
    } else {
      this.componentSchema = {
        containerSchema: undefined,
        id: uuid(),
        name: '',
        stateSchemaCollection: {},
        props: {},
        type: InsertType.component,
      };
    }
  }

  /*
   * 插入容器元素
   */
  insertContainerElement(element: {
    type: InsertType | string;
    // 具体类型是一个 widget schema
    data: any;
  }) {
    const { selectedKey, treeData }  = this.schemaService.insertContainerElement(
      element,
      this.treeData,
      this.selectedTreeNode,
    );
    this.selectedKey = selectedKey;
    this.treeData = fromJS(treeData).toJS();
    // 保存到 localStorage
    this.componentSchema.containerSchema = this.schemaService.convertTreeToSchema(this.treeData[0]);
    this.schemaService.saveSchemaToLocalStorage(this.componentSchema);
  }

  /*
   * 插入数据源
   */
  insertDataSource(payload: any) {
    this.componentSchema.props.dataSourceSchema = payload.data;
    this.componentSchema = {...this.componentSchema};
    this.schemaService.saveSchemaToLocalStorage(this.componentSchema);
  }

  insertEventOrState(payload: DynamicObject, type: string) {
    if (!this.componentSchema[`${type}SchemaCollection`]) {
      this.componentSchema[`${type}SchemaCollection`] = {};
    }
    const { data } = payload;
    this.componentSchema[`${type}SchemaCollection`][data.name] = data;
    this.componentSchema = {...this.componentSchema};
    this.schemaService.saveSchemaToLocalStorage(this.componentSchema);
  }

  /*
   * 插入事件
   */
  insertEvent(payload: {
    type: string;
    data: EventSchema;
  }) {
    this.insertEventOrState(payload, 'event');
    // 广播事件数据给 widget
    this.messageService.sendMessage({
      type: 'event',
      payload: this.componentSchema.eventSchemaCollection,
    });
  }

  /*
   * 插入状态计算
   */
  insertState(payload: any) {
    this.insertEventOrState(payload, 'state');
    // 广播事件数据给 widget
    this.messageService.sendMessage({
      type: 'state',
      payload: this.componentSchema.stateSchemaCollection,
    });
  }
}
