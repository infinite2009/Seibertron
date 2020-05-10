import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { DataMappingService } from '@/services/data-mapping.service';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.less']
})
export class ListWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
  ) { }

  @Input()
  data: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  @Input()
  schema: ComponentSchema;

  @Input()
  listItemOption: ListItemOption;

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  items: any[] = [];

  listRef: string;

  ngOnInit() {
    this.generateDuplicatedItems();
  }

  generateDuplicatedItems() {
    if ((this?.data?.schema as ListWidgetSchema)?.itemSchema) {
      const data = this.output();
      const result = [];
      for (let i = 0, l = data.length; i < l; i++) {
        const node: WidgetTreeNode = _.cloneDeep(this.data.children[0]);
        result.push(node);
      }
      this.items = result;
    }
  }

  generateListItemOption(i: number): ListItemOption {
    console.log('generateListItemOption is called: ');
    const { operation } = (this.data?.schema as ListWidgetSchema)?.dataMappingSchema.list;
    const listDataRef = `${this.listItemOption?.listDataRef || operation.ref}[0]`;
    return {
      listDataRef,
      itemIndex: i,
    } as ListItemOption;
  }

  output() {
    console.log('output is called');
    const { data, operation } = (this.data?.schema as ListWidgetSchema)?.dataMappingSchema.list;
    if (operation) {
      return this.dataMappingService.output(operation, this.props?.dataSourceSchema, this.listItemOption);
    }
    return data;
  }

  trackByItems(index: number) {
    return index;
  }

}
