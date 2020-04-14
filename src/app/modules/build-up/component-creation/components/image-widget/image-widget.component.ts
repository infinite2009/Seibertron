import { Component, Input, OnInit } from '@angular/core';
import WidgetSchema from '@/interfaces/schema/widget.schema';
import { BasicFormService } from '@/services/forms/basic-form.service';

@Component({
  selector: 'byp-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.less']
})
export class ImageWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService
  ) { }

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.schema);
  }

  @Input()
  schema: WidgetSchema;

  ngOnInit() {
  }

}
