import { ComponentSchema } from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-component-widget',
  templateUrl: './component-widget.component.html',
  styleUrls: ['./component-widget.component.less'],
})
export class ComponentWidgetComponent implements OnInit {
  constructor() {}

  @Input()
  treeData: WidgetTreeNode;

  @Input()
  schema: ComponentSchema;

  ngOnInit() {
    console.log('组件schema: ', this.schema);
  }
}
