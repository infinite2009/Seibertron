import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import Positioning from '@/enum/schema/positioning.enum';
import Layout from '@/enum/layout';

export interface ContainerSchema extends AbstractWidgetSchema {
  structure?: {
    layout?: Layout;
    // 定位，目前只允许相对于父元素进行定位
    positioning?: Positioning;
    // 子节点
    children: AbstractWidgetSchema[];
  };
}
