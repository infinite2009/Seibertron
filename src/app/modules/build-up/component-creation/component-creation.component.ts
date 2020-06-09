import { fromJS } from 'immutable';
import { v1 as uuid } from 'uuid';
import { NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import CommandType from '@/enum/command-type';
import Positioning from '@/enum/schema/positioning.enum';
import InsertType from '@/enum/schema/widget-type.enum';
import ICommandPayload from '@/interfaces/command-payload';
import DynamicObject from '@/interfaces/dynamic-object';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { SchemaService } from '@/services/schema.service';
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
        type: 'eventSchema',
        payload: this.componentSchema.eventSchemaCollection
      });
      this.messageService.sendMessage({
        type: 'stateSchema',
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
    const newNode: WidgetTreeNode = {
      title: element.data.title || element.data.name,
      key: element.data.id,
      isLeaf: true,
      type: element.type,
      schema: element.data,
    };
    if (this.schemaService.canHaveChildren(element.type)) {
      newNode.children = [];
      newNode.expanded = true;
    }
    if (!this.treeData || !this.treeData.length) {
      this.treeData = [newNode];
    } else {
      // 暂时 any, 这个 schema 的类型体系需要重构下
      const parentNode = this.selectedTreeNode || this.treeData[0];

      // 原子性的组件不可以插入子元素
      if (!this.schemaService.canHaveChildren(parentNode.type)) {
        this.nzMessageService.error('不可以给非容器类的元素插入子元素!');
        return;
      }

      if (!parentNode.children) {
        parentNode.children = [];
      }

      // schema 中插入子 schema
      if ('children' in parentNode.schema) {
        parentNode.schema.children.push(element.data);
      }
      // 树结点中插入新的子节点
      parentNode.children.push(newNode);
      parentNode.isLeaf = false;

      // 可阵列的元素，要设置 itemSchema
      if (this.schemaService.canRepeatChildren(parentNode.schema.type)) {
        (parentNode.schema as ListWidgetSchema).itemSchema = newNode.schema;
      }

      // 处理下定位的问题
      if (
        this.schemaService.canHaveChildren(element.type) &&
        element.data.styles.position.value === 'absolute' &&
        parentNode.schema.styles.position.value === Positioning.static
      ) {
        parentNode.schema.styles.position.value = Positioning.relative;
      }
    }

    this.selectedKey = newNode.key;
    this.treeData = fromJS(this.treeData).toJS();
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
    this.messageService.sendMessage({
      type: 'event',
      payload,
    });
  }

  /*
   * 插入状态计算
   */
  insertState(payload: any) {
    this.insertEventOrState(payload, 'state');
  }
}
