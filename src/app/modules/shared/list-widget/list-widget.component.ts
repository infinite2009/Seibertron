import DynamicObject from '@/interfaces/dynamic-object';
import ListItemOption from '@/interfaces/list-item-option';
import ComponentSchema  from '@/interfaces/schema/component.schema';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';
import WidgetTreeNode from '@/interfaces/tree-node';
import DataMappingService from '@/services/data-mapping.service';
import BasicFormService from '@/services/forms/basic-form.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'seibertron-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.less']
})
export class ListWidgetComponent {

  constructor(
    private basicFormService: BasicFormService,
    private dataMappingService: DataMappingService,
  ) { }

  get styles() {
    return this.basicFormService.convertSchemaToStyles(this.data.schema);
  }

  @Input()
  data: WidgetTreeNode;

  @Input()
  props: DynamicObject;

  @Input()
  componentStates: DynamicObject;

  @Input()
  componentSchema: ComponentSchema;

  @Input()
  listItemOption: ListItemOption;

  get items(): any[] {
    if ((this?.data?.schema as ListWidgetSchema)?.itemSchema) {
      const data = this.output();
      const result = [];
      for (let i = 0, l = data.length; i < l; i++) {
        const node: WidgetTreeNode = _.cloneDeep(this.data.children[0]);
        result.push(node);
      }
      return result;
    }
    return [];
  }

  /*
   * 这个方法的作用是生成用于渲染 page-list 节点的配置项（列表数据的引用、以及当前节点的索引）
   */
  generateListItemOption(i: number): ListItemOption {
    const { operation } = (this.data?.schema as ListWidgetSchema)?.dataMappingSchema.list;
    const listDataRef = `${this.listItemOption?.listDataRef || operation.ref}[0]`;
    return {
      listDataRef,
      itemIndex: i,
    } as ListItemOption;
  }

  output() {
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
