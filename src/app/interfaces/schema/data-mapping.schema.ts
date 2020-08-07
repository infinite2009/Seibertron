/*
 * 描述如何将数据映射到UI上，指导渲染UI内容
 */
import StateOperator from '@/enum/schema/state-operator.enum';
import ValueType from '@/enum/value-type';
import DynamicObject from '@/interfaces/dynamic-object';

export interface DataMappingOperation {
  // 从父节点传入的数据的引用（可能是一个字段、或者一个索引） 例如：'state.data.page-list'
  ref?: string;
  operator?: StateOperator;
  // 操作输出的类型
  output?: ValueType;
}

export interface DataMappingItemSchema {
  data?: DynamicObject | string;
  // TODO 这个名字语义不明，需要重构
  operation?: DataMappingOperation;
  state?: DataMappingOperation;
}

export default interface DataMappingSchema {
  [key: string]: DataMappingItemSchema;
  [index: number]: DataMappingItemSchema;
}
