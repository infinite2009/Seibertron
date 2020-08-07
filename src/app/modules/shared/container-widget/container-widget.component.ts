import ListItemOption from '@/interfaces/list-item-option';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import ContainerSchema from '@/interfaces/schema/container.schema';
import BasicFormService from '@/services/forms/basic-form.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-container-widget',
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

  @Input()
  listItemOption: ListItemOption;

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.schema);
  }

  ngOnInit() {
  }

}
