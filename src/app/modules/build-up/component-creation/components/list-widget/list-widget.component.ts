import DynamicObject from '@/interfaces/dynamic-object';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import { DataMappingService } from '@/services/data-mapping.service';
import { BasicFormService } from '@/services/forms/basic-form.service';
import { SchemaService } from '@/services/schema.service';
import { Component, Input, OnInit } from '@angular/core';

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

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  items: any[] = [];

  ngOnInit() {
    console.log('data: ', this.data);
    this.generateDuplicatedItems();
  }

  generateDuplicatedItems() {
    if ((this?.data?.schema as ListWidgetSchema)?.itemSchema) {
      const { itemSchema } = this.data.schema as ListWidgetSchema;
      const { id, name, type } = itemSchema;
      // TODO 这里有 bug，output是数据，不是schema
      const data = this.output();
      debugger;
      const result = [];
      for (let i = 0, l = data.length; i < l; i++) {
        const canHaveChildren = this.schemaService.canHaveChildren(type);
        const node: WidgetTreeNode = {
          title: name,
          key: id,
          isLeaf: !canHaveChildren,
          expanded: canHaveChildren,
          type,
          schema: itemSchema,
        };
        if (canHaveChildren) {
          node.children = [];
        }
        result.push(node);
      }
      this.items = result;
    }
  }

  output() {
    const { data, operation } = (this.data?.schema as ListWidgetSchema)?.dataMappingSchema.list;
    if (operation) {
      const result = this.dataMappingService.output(operation, this.props?.dataSourceSchema);
      console.log('映射结果：', result);
      return result;
    }
    return data;
  }

  trackByItems(index: number) {
    return index;
  }

}
