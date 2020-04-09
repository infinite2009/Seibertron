/*
 * 静态 UI 元素，展示内容，呈现样式，可以发送事件给父元素，
 * 当 Widget 之间发生联动时，会自动将这些 Widget
 * 包裹为组件
 * Widget 类似于 Flutter 里边的 StatelessWidget
 */

import Positioning from '@/enum/schema/positioning.enum';
import EventSchema from '@/interfaces/schema/event.schema';
import { StyleCollectionSchema } from '@/interfaces/schema/style-collection.schema';

export interface AbstractWidgetSchema {
  // widget 的 id （32位 uuid）
  id: string;
  // widget 的 语义名字，例如标题，文案
  name: string;
  // 表单项名称
  label?: string;
  // 表单项描述
  description?: string;
  styles?: StyleCollectionSchema;
  structure?: {
    layout?: 0;
    // 想用什么标签渲染，默认 div（开发者用）
    tag?: string;
    // 定位，目前只允许相对于父元素进行定位
    positioning?: Positioning;
  };
  // widget 可以发出的事件
  events?: {
    [key: string]: EventSchema;
  };
  // widget 监听子节点的事件
  listening: {
    [key: string]: EventSchema;
  };
}
