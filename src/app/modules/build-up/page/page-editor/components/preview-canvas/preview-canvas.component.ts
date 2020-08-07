import PageSchema from '@/interfaces/schema/page.schema';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import ComponentSchema from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { NzMessageService } from 'ng-zorro-antd';
import SchemaService from '@/services/schema.service';
import { MessageService } from '@/services/message.service';
import { WidgetMaterialService } from '@/services/material/widget-material.service';
import { PageManagementService } from '@/services/page/page-management.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-preview-canvas',
  templateUrl: './preview-canvas.component.html',
  styleUrls: ['./preview-canvas.component.less'],
})
export class PreviewCanvasComponent implements OnInit {

  constructor(
    private nzMessageService: NzMessageService,
    private schemaService: SchemaService,
    private messageService: MessageService,
    private widgetMaterialService: WidgetMaterialService,
    private pageManagementService: PageManagementService,
    private ref: ChangeDetectorRef,
  ) { }

  pageSchema: PageSchema;

  treeData: WidgetTreeNode[] = [];

  selectedKey: string;

  async ngOnInit(): Promise<void> {
    const { data } = await this.schemaService.fetchPageSchema();
    // 如果有数据，用数据
    if (data) {
      this.pageSchema = data;
      console.log('data: ', data);
      const treeRoot = this.schemaService.convertSchemaToTree(this.pageSchema.componentSchema.containerSchema);
      if (treeRoot) {
        this.treeData = [treeRoot];
        this.selectedKey = this.treeData[0].key;
      }
      // 广播事件数据给 widget
      this.messageService.sendMessage({
        type: 'event',
        payload: this.pageSchema?.componentSchema.eventSchemaCollection
      });
      this.messageService.sendMessage({
        type: 'state',
        payload: this.pageSchema?.componentSchema.stateSchemaCollection
      });
    } else {
      // 没有数据，创建新的 page schema 和 treeNode
      this.pageSchema = this.schemaService.createEmptyPageSchema();
      const treeRoot = this.schemaService.convertSchemaToTree(this.pageSchema.componentSchema.containerSchema);
      if (treeRoot) {
        this.treeData = [treeRoot];
        this.selectedKey = this.treeData[0].key;
      }
    }
    // OnPush策略，需要手动触发
    this.ref.detectChanges();
  }

  onDrop2($event: DndDropEvent) {
    const { data } = $event;
    console.log('data: ', data);
  }
}
