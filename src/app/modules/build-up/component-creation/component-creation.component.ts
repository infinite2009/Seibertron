import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import WidgetTreeNode from '@/interfaces/tree-node';
import { v1 as uuid } from 'uuid';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { BasicFormService } from '@/services/forms/basic-form.service';
import Positioning from '@/enum/schema/positioning.enum';
import WidgetType from '@/enum/schema/widget-type.enum';
import { SchemaService } from '@/services/schema.service';
import WidgetFamilySchema from '@/types/widget-family-schema';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less'],
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    private nzMessageService: NzMessageService,
    private basicFormService: BasicFormService,
    private schemaService: SchemaService
  ) {}

  /* bindings */

  /* attributes */

  selectedKey: string;

  selectedTreeNode: WidgetTreeNode;

  get styles() {
    if (!this.treeData) {
      return {};
    }
    return this.basicFormService.convertSchemaToStyles(this.treeData[0].schema);
  }

  treeData: WidgetTreeNode[];

  /* getters and setters */

  /* methods */

  /* member methods */

  /* event handlers */
  handleTreeNodeClick($event: NzFormatEmitEvent): void {
    this.selectedTreeNode = $event.node.origin as WidgetTreeNode;
    this.selectedKey = $event.node.key;
  }

  handleExecuteCommand($event: ICommandPayload): void {
    switch ($event.type) {
      case CommandType.insert:
        this.insertContainerElement($event.payload);
        break;
      default:
        break;
    }
  }

  handleTreeNodeDrop(): void {
    this.schemaService.saveSchemaToLocalStorage(this.schemaService.convertTreeToSchema(this.treeData[0]));
  }

  /* life cycle hooks */
  async ngOnInit() {
    const { data } = await this.schemaService.fetchSchema();
    this.treeData = [
      this.schemaService.convertSchemaToTree(data),
    ];
    this.selectedKey = this.treeData[0].key;
    this.selectedTreeNode = this.treeData[0];
  }

  /*
   * 插入容器元素
   */
  insertContainerElement(element: any) {
    const parentNode = this.selectedTreeNode || this.treeData[0];
    // 处理下定位的问题
    if (
      element.type === WidgetType.container &&
      element.data.styles.position.value === 'absolute' &&
      parentNode.schema.styles.position.value === Positioning.static
    ) {
      parentNode.schema.styles.position.value = Positioning.relative;
    }
    if (parentNode.type !== WidgetType.container) {
      this.nzMessageService.error('不可以给非容器元素插入子元素!');
      return;
    }
    if (!parentNode.children) {
      parentNode.children = [];
    }
    const newNode: WidgetTreeNode = {
      title: element.data.title || element.data.name,
      key: uuid(),
      isLeaf: true,
      type: element.type,
      schema: element.data,
    };

    if (element.type === WidgetType.container) {
      newNode.children = [];
      newNode.expanded = true;
    }

    // schema 中插入子 schema
    if ('children' in parentNode.schema) {
      parentNode.schema.children.push(element.data);
    }
    // 树结点中插入新的子节点
    parentNode.children.push(newNode);
    parentNode.isLeaf = false;
    this.selectedKey = newNode.key;
    this.selectedTreeNode = newNode;
    this.treeData = [...this.treeData];
    console.log('schema: ', this.treeData);
    // 保存到 localStorage
    this.schemaService.saveSchemaToLocalStorage(this.schemaService.convertTreeToSchema(this.treeData[0]));
  }
}
