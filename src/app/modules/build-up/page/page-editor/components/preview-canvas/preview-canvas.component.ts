import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { v1 as uuid } from 'uuid';
import { NzMessageService } from 'ng-zorro-antd';
import { SchemaService } from '@/services/schema.service';
import { MessageService } from '@/services/message.service';
import { WidgetMaterialService } from '@/services/material/widget-material.service';
import { PageManagementService } from '@/services/page/page-management.service';
import MaterialType from '@/enum/schema/material-type.enum';

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

  componentSchema: ComponentSchema;

  treeData: WidgetTreeNode[] = [];

  selectedKey: string;

  async ngOnInit(): Promise<void> {
    const { data } = await this.schemaService.fetchComponentSchema();
    if (data) {
      this.componentSchema = data;
      const treeRoot = this.schemaService.convertSchemaToTree(data.containerSchema);
      if (treeRoot) {
        this.treeData = [treeRoot];
        this.selectedKey = this.treeData[0].key;
      }
      // 广播事件数据给 widget
      this.messageService.sendMessage({
        type: 'event',
        payload: this.componentSchema.eventSchemaCollection
      });
      this.messageService.sendMessage({
        type: 'state',
        payload: this.componentSchema.stateSchemaCollection
      });
    } else {
      // 没有数据，创建新的 schema 和
      this.componentSchema = {
        containerSchema: this.schemaService.createEmptyContainerSchema(),
        id: uuid(),
        name: '',
        stateSchemaCollection: {},
        props: {},
        type: MaterialType.component,
      };
    }
    this.ref.detectChanges();
  }

  onDrop2($event: DndDropEvent) {
    const { data } = $event;
    console.log('data: ', data);
  }
}
