import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { MessageService } from '@/services/message.service';
import { SchemaService } from '@/services/schema.service';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import _ from 'lodash';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-component-widget',
  templateUrl: './component-widget.component.html',
  styleUrls: ['./component-widget.component.less'],
})
export class ComponentWidgetComponent implements OnChanges {
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

  // TODO 暂时用不上
  props: DynamicObject;

  // TODO 待实现
  stateFunctions: DynamicObject;

  ngOnChanges(changes: SimpleChanges) {
    const { schema } = changes;
    if (schema) {
      this.stateFunctions = this.schemaService.convertSchemaToStates(this.schema);
      this.messageService.sendMessage(_.cloneDeep(this.stateFunctions));
    }
  }

}
