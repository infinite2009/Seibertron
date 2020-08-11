import SchemaService from '@/services/schema.service';
import WidgetFamilySchema from '@/types/widget-family-schema';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'seibertron-operation-mask',
  templateUrl: './operation-mask.component.html',
  styleUrls: ['./operation-mask.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperationMaskComponent implements OnInit {

  constructor(
    private schemaService: SchemaService,
  ) { }

  @Input()
  schema: WidgetFamilySchema;

  @Output()
  execute: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  /* handlers */
  handleDeletingMaterial() {
    this.schemaService.deleteWidget(this.schema);
  }

}
