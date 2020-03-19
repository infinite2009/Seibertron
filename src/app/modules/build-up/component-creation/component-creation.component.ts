import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzMessageService } from 'ng-zorro-antd';
import { ComponentPrototypeDirective } from '@/shared-module/directives/component-prototype.directive';
import WidgetTreeNode from '@/interfaces/tree-node';

@Component({
  selector: 'byp-component-creation',
  templateUrl: './component-creation.component.html',
  styleUrls: ['./component-creation.component.less'],
})
export class ComponentCreationComponent implements OnInit {
  constructor(
    private message: NzMessageService,
  ) {
  }

  /* bindings */
  @Input()
  selectedComponentPrototype;

  @ViewChild(ComponentPrototypeDirective, { static: true })
  cmpProto: ComponentPrototypeDirective;

  /* attributes */
  treeData: WidgetTreeNode[] = [
    {
      title: '容器1',
      key: '0',
      expanded: true,
      type: 'container',
      dataSource: [
        {
          id: '1',
          name: '上海',
        }, {
          id: '2',
          name: '北京',
        }, {
          id: '3',
          name: '广州',
        }, {
          id: '4',
          name: '杭州',
        },
      ],
      children: [
        {
          title: '容器2',
          key: '1001',
          expanded: true,
          type: 'container',
          children: [
            {
              title: '文本1',
              key: '10010',
              isLeaf: true,
              type: 'text',
              content: '我是个测试文本1'
            },
            {
              title: '文本2',
              key: '10011',
              isLeaf: true,
              type: 'text',
              content: '我是个测试文本2'
            },
            {
              title: '图片1',
              key: '10012',
              isLeaf: true,
              type: 'image',
              url: 'https://miro.medium.com/max/7680/1*MjrP9m07l0qJ0Y9TSH1QCA.jpeg'
            },
          ],
        },
        {
          title: '容器2',
          key: '1002',
          type: 'container',
          children: [
            {
              title: '选择结果',
              key: '10020',
              isLeaf: true,
              type: 'dataDriven',
              operations: [
                {
                  type: 'filter',
                  key: 'id',
                }, {
                  type: 'map',
                  key: 'name',
                },
              ],
            },
            {
              title: '列表',
              key: '10021',
              isLeaf: true,
              type: 'dataDriven',
              operations: [
                {
                  type: 'map',
                  key: 'name',
                },
              ],
            },
          ],
        },
      ],
    },
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
