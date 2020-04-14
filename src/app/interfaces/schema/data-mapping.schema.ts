/*
 * 描述如何将数据映射到UI上，指导渲染UI内容
 */
import DataMappingOperator from '@/enum/schema/uimapping-operator.enum';
import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import { ComponentSchema } from '@/interfaces/schema/component.schema';
import DataSourceType from '@/interfaces/data-source-type';
import DynamicObject from '@/interfaces/dynamic-object';

export interface DataMappingOperation {
  operator: DataMappingOperator;
  // 操作输出的类型
  output: AbstractWidgetSchema | ComponentSchema;
}

export default interface DataMappingSchema {
  type: DataSourceType;
  data: DynamicObject | string;
  // 从父节点传入的数据的引用（可能是一个字段、或者一个索引）
  ref?: string;
  dataMappingOperation?: DataMappingOperation;
}
