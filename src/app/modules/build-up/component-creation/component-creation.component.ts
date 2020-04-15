import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import WidgetTreeNode from '@/interfaces/tree-node';
import { v1 as uuid } from 'uuid';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import StyleValueUnit from '@/enum/style-value-unit';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less'],
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    private nzMessageService: NzMessageService
  ) {
  }

  /* bindings */

  /* attributes */

  selectedKey: string;

  selectedTreeNode: WidgetTreeNode;

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

  handleTreeNodeDrop($event: NzFormatEmitEvent): void {
    console.log('$event: ', $event);
  }

  /* life cycle hooks */
  ngOnInit() {
    const key = uuid();
    this.treeData = [
      {
        key,
        title: '容器1',
        type: 'container',
        expanded: true,
        children: [],
        schema: {
          id: key,
          type: 'container',
          name: '容器1',
          children: [],
          styles: {
            position: {
              name: 'position',
              value: 'static',
              unit: StyleValueUnit.none,
            },
            display: {
              name: 'display',
              value: 'block',
              unit: StyleValueUnit.none
            }
          }
        } as unknown as ContainerSchema,
      }
    ];
    this.selectedKey = this.treeData[0].key;
    this.selectedTreeNode = this.treeData[0];
  }

  /*
   * 插入容器元素
   */
  insertContainerElement(element: any) {
    const parentNode = this.selectedTreeNode || this.treeData[0];
    if (parentNode.type !== 'container') {
      this.nzMessageService.error('不可以给非容器元素插入子元素!');
      return;
    }
    if (!parentNode.children) {
      parentNode.children = [];
    }
    const newNode = {
      title: element.data.title || element.data.name,
      key: uuid(),
      isLeaf: true,
      type: element.type,
      schema: element.data,
    };
    parentNode.children.push(newNode);
    parentNode.isLeaf = false;
    this.selectedKey = newNode.key;
    this.selectedTreeNode = newNode;
    this.treeData = [...this.treeData];
  }
}
