/*
 * 列表 widget，通过引用数据渲染子节点
 */

import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';

export default interface ListViewSchema extends AbstractWidgetSchema {
  item: {
    // 渲染列表项用的组件或者 Widget 的名字
    type: string;
  };
}
