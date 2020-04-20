import { Component, Input, OnInit } from '@angular/core';
import WidgetSchema from '@/interfaces/schema/widget.schema';
import { BasicFormService } from '@/services/forms/basic-form.service';

@Component({
  selector: 'seibertron-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.less']
})
export class LinkWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService
  ) { }

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.schema);
  }

  @Input()
  schema: WidgetSchema;

  @Input()
  parentSchema: WidgetSchema;

  ngOnInit() {
    console.log('link schema', this.schema);
    console.log('link parent schema: ', this.parentSchema);
  }

}
