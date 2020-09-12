import InsertType from '@/enum/schema/widget-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import MessagePayload from '@/interfaces/message-payload';
import ComponentSchema from '@/interfaces/schema/component.schema';
import PageSchema from '@/interfaces/schema/page.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { MessageService } from '@/services/message.service';
import SchemaService from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { fromJS } from 'immutable';
import _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-widget',
  templateUrl: './component-widget.component.html',
  styleUrls: ['./component-widget.component.less'],
})
export class ComponentWidgetComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private schemaService: SchemaService, private messageService: MessageService) {}

  @Input()
  treeData: WidgetTreeNode[];

  @Input()
  schema: ComponentSchema;

  @Input()
  listItemOption: ListItemOption;

  stateFunctions: DynamicObject;

  // 预览用的状态值，通过状态机算得到
  states: DynamicObject;

  subscription: Subscription;

  pageSchema: PageSchema;

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

  ngOnChanges(changes: SimpleChanges) {
    const { schema } = changes;
    if (schema?.currentValue) {
      this.stateFunctions = this.schemaService.convertSchemaToStates(this.schema);
      this.messageService.sendMessage(
        _.cloneDeep({
          type: 'stateFunctions',
          payload: this.stateFunctions,
        })
      );
    }
  }

  ngOnInit(): void {
    this.messageService.message.subscribe(this.handleMessage);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleMessage = (msg: MessagePayload) => {
    const { type, payload } = msg;
    if (type === 'outputState') {
      const { stateSchemaCollection } = this.schema;
      if (!stateSchemaCollection || !stateSchemaCollection[payload.stateName]) {
        return;
      }
      const { calculation } = stateSchemaCollection[payload.stateName];
      this.states = {
        ...this.states,
        [payload.stateName]: calculation.operator === 'filter' ? payload.stateValue[0] : payload.stateValue,
      };
    } else if (type === 'insert') {
      this.insertMaterial(payload);
    }
  };

  /*
   * 插入素材，素材不一定是 UI 元素
   */
  insertMaterial(element: {
    type: InsertType | string;
    // 具体类型是一个 widget schema
    data: any;
    selectedKey: string;
  }) {
    this.selectedKey = element.selectedKey;
    // TODO 这个插入函数有 bug ，会把原先的根节点顶掉
    const { selectedKey, treeData } = this.schemaService.insertContainerElement(
      element,
      this.treeData,
      this.selectedTreeNode
    );
    this.selectedKey = selectedKey;
    console.log('new container id:', this.selectedKey);
    this.treeData = fromJS(treeData).toJS();
    this.schema.containerSchema = this.schemaService.convertTreeToSchema(this.treeData[0]);
    console.log('schema: ', JSON.parse(JSON.stringify(this.schema.containerSchema)));
  }
}
