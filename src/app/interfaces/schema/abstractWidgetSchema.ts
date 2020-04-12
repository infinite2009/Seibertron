/*
 * 静态 UI 元素，展示内容，呈现样式，可以发送事件给父元素，
 * 当 Widget 之间发生联动时，会自动将这些 Widget
 * 包裹为组件
 * Widget 类似于 Flutter 里边的 StatelessWidget
 */

import EventSchema from '@/interfaces/schema/event.schema';
import { StyleCollectionSchema } from '@/interfaces/schema/style-collection.schema';
import WidgetType from '@/enum/schema/widget-type.enum';

export interface AbstractWidgetSchema {
  // widget 的 id （32位 uuid）
  id: string;
  // widget 的类型
  type: WidgetType;
  // widget 的 语义名字，例如标题，文案
  name: string;
  // 表单项描述
  desc?: string;
  styles?: StyleCollectionSchema;
  // widget 可以发出的事件
  events?: {
    [key: string]: EventSchema;
  };
  // widget 监听子节点的事件
  listening?: {
    [key: string]: EventSchema;
  };
}
