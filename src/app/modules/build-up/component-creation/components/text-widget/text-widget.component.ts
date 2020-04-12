import { Component, Input, OnInit } from '@angular/core';
import WidgetSchema from '@/interfaces/schema/widget.schema';

@Component({
  selector: 'byp-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.less']
})
export class TextWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  schema: WidgetSchema;

  get styles() {
    if (!this.schema) {
      return {};
    }
    const result = {};
    Object.entries(this.schema.styles).forEach(([key, val]) => {
      result[key] = `${val.value}${val.unit}`;
    });
    debugger;
    return result;
}

  ngOnInit() {
    console.log(this.schema);
  }

}
