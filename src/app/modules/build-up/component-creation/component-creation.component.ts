import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent /*NzMessageService*/ } from 'ng-zorro-antd';
import { ComponentPrototypeDirective } from '@/shared-module/directives/component-prototype.directive';
import WidgetTreeNode from '@/interfaces/tree-node';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less'],
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    // private message: NzMessageService,
  ) {
  }

  /* bindings */
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* attributes */

  selectedKey: string;

  treeData: WidgetTreeNode[] = [
    {
      key: uuid(),
      title: '容器1',
      type: 'container',
      expanded: true,
      children: [],
    }
  ];

  /* 当前用户选中的焦点 */
  currentFocus: any;

  /* getters and setters */

  /* methods */

  /* member methods */

  /* event handlers */
  handleTreeNodeClick($event: NzFormatEmitEvent): void {
    console.log('$event: ', $event);
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
