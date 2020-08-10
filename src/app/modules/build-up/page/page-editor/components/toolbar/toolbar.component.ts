import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import PageSchema from '@/interfaces/schema/page.schema';
import SchemaService from '@/services/schema.service';

@Component({
  selector: 'seibertron-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {

  constructor(
    private schemaService: SchemaService,
  ) { }

  active: boolean = true;

  @Input()
  schema: PageSchema;

  @Output()
  schemaChange: EventEmitter<PageSchema> = new EventEmitter<PageSchema>();

  @Output()
  editModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  handleChangingSwitch(e: any) {
    this.active = e;
    this.editModeChange.emit(this.active);
  }

  /*
   * 保存 schema
   */
  handleSavingSchema() {
    this.schemaService.saveSchemaToLocalStorage(this.schema);
  }

  handleUndo() {
    // TODO 撤销操作
    this.schemaChange.emit(this.schema);
  }

  handleRedo() {
    // TODO 重做操作
    this.schemaChange.emit(this.schema);
  }
}
