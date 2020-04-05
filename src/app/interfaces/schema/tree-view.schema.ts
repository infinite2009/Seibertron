import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';

export default interface TreeViewSchema extends AbstractWidgetSchema {
  node: {
    // 渲染节点的 widget 或 component 名字
    type: string;
  };
}
