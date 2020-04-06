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

  ngOnInit() {
  }

}
