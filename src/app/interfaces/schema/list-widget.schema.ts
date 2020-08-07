/*
 * 列表 widget，通过引用数据渲染子节点
 */

import ContainerSchema  from '@/interfaces/schema/container.schema';
import DataMappingSchema from '@/interfaces/schema/data-mapping.schema';
import WidgetFamilySchema from '@/types/widget-family-schema';

export default interface ListWidgetSchema extends ContainerSchema {
  // 渲染列表项用的 widget schema
  itemSchema?: WidgetFamilySchema;
  dataMappingSchema: DataMappingSchema;
}
