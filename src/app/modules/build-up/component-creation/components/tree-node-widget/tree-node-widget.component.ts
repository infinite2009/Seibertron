import { Component, Input, OnInit } from '@angular/core';
import WidgetTreeNode from '@/interfaces/tree-node';

@Component({
  selector: 'byp-tree-node-widget',
  templateUrl: './tree-node-widget.component.html',
  styleUrls: ['./tree-node-widget.component.less']
})
export class TreeNodeWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  data: WidgetTreeNode;

  ngOnInit() {
  }

}
