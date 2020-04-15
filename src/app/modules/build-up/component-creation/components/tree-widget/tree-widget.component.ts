import { Component, Input, OnInit } from '@angular/core';
import WidgetTreeNode from '@/interfaces/tree-node';

@Component({
  selector: 'byp-tree-widget',
  templateUrl: './tree-widget.component.html',
  styleUrls: ['./tree-widget.component.less']
})
export class TreeWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  data: WidgetTreeNode;

  // 父节点的 data（根元素的 parent 为 null)
  @Input()
  parent: WidgetTreeNode;

  ngOnInit() {
    console.log('this.parent: ', this.parent);
  }

}
