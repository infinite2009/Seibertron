import DynamicObject from '@/interfaces/dynamic-object';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { DataMappingService } from '@/services/data-mapping.service';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { SchemaService } from '@/services/schema.service';
import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'seibertron-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.less']
})
export class ListWidgetComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
    private schemaService: SchemaService,
  ) { }

  @Input()
  data: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  @Input()
  schema: ComponentSchema;

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  items: any[] = [];

  ngOnInit() {
    this.generateDuplicatedItems();
  }

  generateDuplicatedItems() {
    if ((this?.data?.schema as ListWidgetSchema)?.itemSchema) {
      // TODO 这里有 bug，output是数据，不是schema
      const data = this.output();
      const result = [];
      for (let i = 0, l = data.length; i < l; i++) {
        const node: WidgetTreeNode = _.cloneDeep(this.data.children[0]);
        if (node.schema.dataMapping) {
          Object.values(node.schema.dataMapping).forEach(val => {
            console.log('i: ', i);
            val.operation.ref = val.operation.ref.replace(/\.(\d+)/, `[${i}]`);
            val.operation.ref = val.operation.ref.replace(/\[(\d+)]/, `[${i}]`);
          });
        }
        result.push(node);
      }
      debugger;
      this.items = result;
    }
  }

  output() {
    const { data, operation } = (this.data?.schema as ListWidgetSchema)?.dataMappingSchema.list;
    if (operation) {
      return this.dataMappingService.output(operation, this.props?.dataSourceSchema);
    }
    return data;
  }

  trackByItems(index: number) {
    return index;
  }

}
