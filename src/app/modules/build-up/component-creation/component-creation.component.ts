import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzContextMenuService, NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import { ComponentPrototypeDirective } from '@/shared-module/directives/component-prototype.directive';
import WidgetTreeNode from '@/interfaces/tree-node';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less']
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    private message: NzMessageService,
    private nzContextMenuService: NzContextMenuService,
  ) { }

  /* bindings */
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* attributes */
  treeData: WidgetTreeNode[] = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf0', key: '10010', isLeaf: true },
            { title: 'leaf1', key: '10011', isLeaf: true },
            { title: 'leaf2', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [{ title: 'leaf', key: '10030', isLeaf: true }, { title: 'leaf', key: '10031', isLeaf: true }]
        }
      ]
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
  }

  /*
   * 插入元素
   */
  insertElement() {
  }

}
