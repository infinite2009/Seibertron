import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import ComponentSchema from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { MessageService } from '@/services/message.service';
import SchemaService from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-widget',
  templateUrl: './component-widget.component.html',
  styleUrls: ['./component-widget.component.less'],
})
export class ComponentWidgetComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private schemaService: SchemaService,
    private messageService: MessageService,
  ) {}

  @Input()
  treeData: WidgetTreeNode;

  @Input()
  schema: ComponentSchema;

  @Input()
  listItemOption: ListItemOption;

  stateFunctions: DynamicObject;

  // 预览用的状态值，通过状态机算得到
  states: DynamicObject;

  subscription: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    const { schema } = changes;
    if (schema.currentValue) {
      this.stateFunctions = this.schemaService.convertSchemaToStates(this.schema);
      this.messageService.sendMessage(_.cloneDeep({
        type: 'stateFunctions',
        payload: this.stateFunctions
      }));
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

  handleMessage = (msg: any) => {
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
      }
    }
  }
}
