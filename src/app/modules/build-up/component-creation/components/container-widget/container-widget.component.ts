import { Component, Input, OnInit } from '@angular/core';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import { BasicFormService } from '@/services/forms/basic-form.service';

@Component({
  selector: 'byp-container-widget',
  templateUrl: './container-widget.component.html',
  styleUrls: ['./container-widget.component.less']
})
export class ContainerWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService
  ) { }

  @Input()
  schema: ContainerSchema;

  @Input()
  parentSchema: ContainerSchema;

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.schema);
  }

  ngOnInit() {
    console.log('container: ', this.schema);
    console.log('container parent: ', this.schema);
  }

}
