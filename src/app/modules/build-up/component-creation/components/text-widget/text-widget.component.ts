import { Component, Input, OnInit } from '@angular/core';
import { BasicFormService } from '@/services/forms/basic-form.service';
import WidgetFamilySchema from '@/types/widget-family-schema';

@Component({
  selector: 'seibertron-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.less']
})
export class TextWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService
  ) { }

  @Input()
  schema: WidgetFamilySchema;

  @Input()
  parentSchema: WidgetFamilySchema;

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.schema);
}

  ngOnInit() {
    console.log(this.schema);
  }

}
