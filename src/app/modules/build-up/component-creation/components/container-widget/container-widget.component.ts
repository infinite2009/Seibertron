import { Component, Input, OnInit } from '@angular/core';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import DynamicObject from '@/interfaces/dynamic-object';
import Layout from '@/enum/layout';

@Component({
  selector: 'byp-container-widget',
  templateUrl: './container-widget.component.html',
  styleUrls: ['./container-widget.component.less']
})
export class ContainerWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  schema: ContainerSchema;

  styles: DynamicObject;

  ngOnInit() {
    let layoutStyle: DynamicObject;
    switch (this.schema.structure.layout) {
      case  Layout.column:
        layoutStyle = {
          display: 'block',
        };
        break;
      case Layout.flex:
        layoutStyle = {
          display: 'flex',
        };
        break;
      default:
        break;
    }
    this.styles = {
      ...layoutStyle,
      ...this.schema.styles,
    };
  }

}
