import PageSchema from '@/interfaces/schema/page.schema';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import WidgetTreeNode from '@/interfaces/tree-node';
import { NzMessageService } from 'ng-zorro-antd';
import SchemaService from '@/services/schema.service';
import { MessageService } from '@/services/message.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-preview-canvas',
  templateUrl: './preview-canvas.component.html',
  styleUrls: ['./preview-canvas.component.less'],
})
export class PreviewCanvasComponent implements OnInit, OnDestroy {
  constructor(
    private nzMessageService: NzMessageService,
    private schemaService: SchemaService,
    private messageService: MessageService,
    private ref: ChangeDetectorRef
  ) {}

  pageSchema: PageSchema;

  treeData: WidgetTreeNode[] = [];

  pageSchemaSubscription: Subscription;

  selectedKey: string;

  items: any[] = [];

  list: any[] = [];

  ngOnInit(): void {
    this.schemaService.fetchPageSchema();
    this.pageSchemaSubscription = this.messageService.pageSchemaMsg.subscribe((schema) => {
      this.pageSchema = schema;
      const treeRoot = this.schemaService.convertSchemaToTree(this.pageSchema.componentSchema.containerSchema);
      if (treeRoot) {
        this.treeData = [treeRoot];
        this.selectedKey = this.treeData[0].key;
      }
      // 广播事件数据给 widget
      this.messageService.sendMessage({
        type: 'event',
        payload: this.pageSchema?.componentSchema.eventSchemaCollection,
      });
      this.messageService.sendMessage({
        type: 'state',
        payload: this.pageSchema?.componentSchema.stateSchemaCollection,
      });
      console.log('subscribe in preview: ', this.pageSchema);
      // OnPush策略，需要手动触发
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {}
}
