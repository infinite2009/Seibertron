import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import PageSchema from '@/interfaces/schema/page.schema';
import SchemaService from '@/services/schema.service';
import { MessageService } from '@/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'seibertron-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit, OnDestroy {
  constructor(private schemaService: SchemaService, private msgService: MessageService) {}

  active: boolean = true;

  @Input()
  schema: PageSchema;

  @Output()
  schemaChange: EventEmitter<PageSchema> = new EventEmitter<PageSchema>();

  @Output()
  editModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  pageSchemaSubscription: Subscription;

  selectedSchemaSubscription: Subscription;

  selectedSchemaMsg: { type: string; schema: any };

  // TODO to refactor schema
  schemaForRefactoring: PageSchema;

  ngOnInit(): void {
    // TODO 待测试
    this.pageSchemaSubscription = this.msgService.pageSchemaMsg.subscribe((pageSchema) => {
      this.schemaForRefactoring = pageSchema;
      console.log('subscribe: ', this.schemaForRefactoring);
    });
    this.selectedSchemaSubscription = this.msgService.selectedSchemaMsg.subscribe((schemaMsg: {type: string; schema: any}) => {
      this.selectedSchemaMsg = schemaMsg;
    });
  }

  ngOnDestroy(): void {
    this.pageSchemaSubscription.unsubscribe();
  }

  handleChangingSwitch(e: any) {
    this.active = e;
    this.editModeChange.emit(this.active);
  }

  /*
   * 保存 schema
   */
  handleSavingSchema() {
    this.schemaService.saveSchema(this.schema);
  }

  handleUndo() {
    // TODO 撤销操作
    this.schemaChange.emit(this.schema);
  }

  handleRedo() {
    // TODO 重做操作
    this.schemaChange.emit(this.schema);
  }

  handleDeletingMaterial() {
    // TODO 删除选中的素材（widget，状态，事件等等）
  }
}
