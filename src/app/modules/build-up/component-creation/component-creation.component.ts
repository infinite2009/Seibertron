import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
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
  constructor() {
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
            break;
          case 'text':
            break;
          case 'link':
            break;
          case 'image':
            break;
          case 'list':
            break;
          case 'table':
            break;
          case 'form':
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
    console.log(this.selectedKey);
    console.log(this.treeData[0]);
  }

  /*
   * 插入元素
   */
  insertElement() {
  }

}
