import InsertType from '@/enum/schema/widget-type.enum';
import PageSchema from '@/interfaces/schema/page.schema';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { fromJS } from 'immutable';
import { DndDropEvent } from 'ngx-drag-drop';
import WidgetTreeNode from '@/interfaces/tree-node';
import { NzMessageService } from 'ng-zorro-antd';
import SchemaService from '@/services/schema.service';
import { MessageService } from '@/services/message.service';
import { WidgetMaterialService } from '@/services/material/widget-material.service';
import { PageManagementService } from '@/services/page/page-management.service';
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
    private widgetMaterialService: WidgetMaterialService,
    private pageManagementService: PageManagementService,
    private ref: ChangeDetectorRef
  ) {}

  pageSchema: PageSchema;

  treeData: WidgetTreeNode[] = [];

  pageSchemaSubscription: Subscription;

  selectedKey: string;

  get selectedTreeNode(): WidgetTreeNode {
    if (this?.treeData?.length) {
      let queue = [this.treeData[0]];
      while (queue.length) {
        const currentNode = queue[0];
        if (currentNode.key === this.selectedKey) {
          console.log('selected node: ', currentNode.key);
          return currentNode;
        }
        if (currentNode.children) {
          queue = queue.concat(currentNode.children);
        }
        queue.shift();
      }
    }
    return null;
  }

  async ngOnInit(): Promise<void> {
    this.initSchema();
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
    });
  }

  ngOnDestroy(): void {}

  onDropMaterial($event: DndDropEvent) {
    const { data } = $event;
    const schema = this.schemaService.generateSchema(data.type);
    // 插入素材
    this.insertMaterial({ type: data.type, data: schema });
  }

  async initSchema() {
    // TODO 没改完
    const { data } = await this.schemaService.fetchPageSchema();
    // 如果有数据，用数据
    if (data) {
      this.pageSchema = data;
      console.log('data: ', data);
      // const treeRoot = this.schemaService.convertSchemaToTree(this.pageSchema.componentSchema.containerSchema);
      // if (treeRoot) {
      //   this.treeData = [treeRoot];
      //   this.selectedKey = this.treeData[0].key;
      // }
      // // 广播事件数据给 widget
      // this.messageService.sendMessage({
      //   type: 'event',
      //   payload: this.pageSchema?.componentSchema.eventSchemaCollection,
      // });
      // this.messageService.sendMessage({
      //   type: 'state',
      //   payload: this.pageSchema?.componentSchema.stateSchemaCollection,
      // });
    } else {
      // 没有数据，创建新的 page schema 和 treeNode
      this.schemaService.createEmptyPageSchema();
      const treeRoot = this.schemaService.convertSchemaToTree(this.pageSchema.componentSchema.containerSchema);
      if (treeRoot) {
        this.treeData = [treeRoot];
        this.selectedKey = this.treeData[0].key;
      }
    }
    // OnPush策略，需要手动触发
    this.ref.detectChanges();
  }

  /*
   * 插入素材，素材不一定是 UI 元素
   */
  insertMaterial(element: {
    type: InsertType | string;
    // 具体类型是一个 widget schema
    data: any;
  }) {
    const { selectedKey, treeData } = this.schemaService.insertContainerElement(
      element,
      this.treeData,
      this.selectedTreeNode
    );
    this.selectedKey = selectedKey;
    this.treeData = fromJS(treeData).toJS();
    // 保存到 localStorage
    this.pageSchema.componentSchema.containerSchema = this.schemaService.convertTreeToSchema(this.treeData[0]);
    this.schemaService.saveSchema(this.pageSchema);
  }
}
