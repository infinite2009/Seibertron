/*
 * 列表 widget，通过引用数据渲染子节点
 */

import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import DataSourceSchema from '@/interfaces/schema/data-source.schema';
import WidgetFamilySchema from '@/types/widget-family-schema';

export default interface ListWidgetSchema extends AbstractWidgetSchema {
  // 容器的 schema
  containerSchema: ContainerSchema;
  // 渲染列表用的数据源 schema
  dataSourceSchema?: DataSourceSchema;
  // 渲染列表项用的 widget
  itemSchema?: WidgetFamilySchema;
}
