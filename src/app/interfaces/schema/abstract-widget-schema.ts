/*
 * 静态 UI 元素，展示内容，呈现样式，可以发送事件给父元素，
 * 当 Widget 之间发生联动时，会自动将这些 Widget
 * 包裹为组件
 * Widget 类似于 Flutter 里边的 StatelessWidget
 */

import StateContext from '@/interfaces/schema/state-context';
import { StyleCollectionSchema } from '@/interfaces/schema/style-collection.schema';
import WidgetType from '@/enum/schema/widget-type.enum';
import { DataMappingSchema } from '@/interfaces/schema/data-mapping.schema';

export interface AbstractWidgetSchema {
  // widget 的 id （32位 uuid）
  id: string;
  // widget 的类型
  type: WidgetType | string;
  // widget 的 语义名字，例如标题，文案
  name: string;
  // 表单项描述
  desc?: string;
  styles?: StyleCollectionSchema;
  // 数据映射
  dataMapping?: DataMappingSchema;
  // 状态上下文
  stateCtx?: StateContext;
}
