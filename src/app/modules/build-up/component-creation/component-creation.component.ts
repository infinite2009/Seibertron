import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import { ComponentPrototypeDirective } from '@/shared-module/directives/component-prototype.directive';
import WidgetTreeNode from '@/interfaces/tree-node';
import { v1 as uuid } from 'uuid';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';

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
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* attributes */

  selectedKey: string;

  selectedTreeNode: WidgetTreeNode;

  treeData: WidgetTreeNode[] = [
    {
      key: uuid(),
      title: '容器1',
      type: 'container',
      expanded: true,
      children: [],
    }
  ];

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
        switch ($event.payload.type) {
          case 'container':
            this.insertContainerElement($event.payload);
            break;
          case 'text':
            this.insertContainerElement($event.payload);
            break;
          case 'link':
            this.insertContainerElement($event.payload);
            break;
          case 'image':
            this.insertContainerElement($event.payload);
            break;
          case 'list':
            this.insertContainerElement($event.payload);
            break;
          case 'table':
            this.insertContainerElement($event.payload);
            break;
          case 'form':
            this.insertContainerElement($event.payload);
            break;
          default:
            break;
        }
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
    this.selectedKey = this.treeData[0].key;
    this.selectedTreeNode = this.treeData[0];
  }

  // ngDoCheck() {
  //
  // }

  /*
   * 插入元素
   */
  insertElement() {
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
      title: element.data.title,
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
