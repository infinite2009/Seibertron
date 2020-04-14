import { Component, Input, OnInit } from '@angular/core';
import WidgetSchema from '@/interfaces/schema/widget.schema';
import { BasicFormService } from '@/services/forms/basic-form.service';

@Component({
  selector: 'byp-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.less']
})
export class TextWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService
  ) { }

  @Input()
  schema: WidgetSchema;

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.schema);
}

  ngOnInit() {
    console.log(this.schema);
  }

}
