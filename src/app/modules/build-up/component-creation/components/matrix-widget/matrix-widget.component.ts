import ListItemOption from '@/interfaces/list-item-option';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seibertron-matrix-widget',
  templateUrl: './matrix-widget.component.html',
  styleUrls: ['./matrix-widget.component.less']
})
export class MatrixWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  listItemOption: ListItemOption;

  ngOnInit() {
  }

}
