import {Component, Input, OnInit, Output} from '@angular/core';
import WidgetSchema from '../../interfaces/widget.schematics';
import Layout from '../../enum/layout';

@Component({
  selector: 'byp-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less']
})
export class WidgetComponent implements OnInit {

  constructor() { }

  @Input()
  schema: WidgetSchema;

  ngOnInit() {
    console.log(this.schema);
  }

  generateStyle() {
    if (!(this.schema && this.schema.structure && this.schema.layout)) {
      return {};
    }
    switch (this.schema.structure.layout) {
      case Layout.column:
        return this.generateRowLayoutStyle();
      case Layout.row:
        return {};
      case Layout.flex:
        return {};
      case Layout.flow:
        return {};
      default:
        return {};
    }
  }

  generateRowLayoutStyle() {
    return {
      display: 'flex',
      'align-items': 'center',
    };
  }

  handleClick($event) {
    console.log('clicked', $event);
  }

  handleMouseEnter($event) {
    console.log('mouseenter: ', $event);
  }

  handleMouseLeave($event) {
    console.log('mouseleave: ', $event);
  }
}
