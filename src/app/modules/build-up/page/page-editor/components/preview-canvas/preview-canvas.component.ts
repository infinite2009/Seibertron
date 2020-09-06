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
    private ref: ChangeDetectorRef // private dragulaService: DragulaService
  ) {
    // this.dragulaService.createGroup('WIDGET', {
    //   copy: (el, source) => source.id === 'material-list',
    //   copyItem: (item: any) => ({ ...item }),
    //   accepts: (el, target) => target.id !== 'material-list',
    // });
  }

  pageSchema: PageSchema;

  treeData: WidgetTreeNode[] = [];

  pageSchemaSubscription: Subscription;

  selectedKey: string;

  items: any[] = [];

  list: any[] = [];

  // get selectedTreeNode(): WidgetTreeNode {
  //   if (this?.treeData?.length) {
  //     let queue = [this.treeData[0]];
  //     while (queue.length) {
  //       const currentNode = queue[0];
  //       if (currentNode.key === this.selectedKey) {
  //         console.log('selected node: ', currentNode.key);
  //         return currentNode;
  //       }
  //       if (currentNode.children) {
  //         queue = queue.concat(currentNode.children);
  //       }
  //       queue.shift();
  //     }
  //   }
  //   return null;
  // }

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

  onChangeDragula($event: any) {
    // TODO insert element here
  }

  onDrop($event) {
    console.log('seibertron dropped');
  }
}
