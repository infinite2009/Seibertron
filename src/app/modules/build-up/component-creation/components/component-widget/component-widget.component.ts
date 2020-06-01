import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-widget',
  templateUrl: './component-widget.component.html',
  styleUrls: ['./component-widget.component.less'],
})
export class ComponentWidgetComponent implements OnInit{
  constructor() {}

  @Input()
  treeData: WidgetTreeNode;

  @Input()
  schema: ComponentSchema;

  @Input()
  listItemOption: ListItemOption;

  // TODO 暂时用不上
  props: DynamicObject;

  // TODO 待实现
  states: DynamicObject;

  ngOnInit() {
    // TODO 计算这个组件的 states
  }

}
