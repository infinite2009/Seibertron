import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import Positioning from '@/enum/schema/positioning.enum';

export interface ContainerSchema extends AbstractWidgetSchema {
  structure?: {
    layout?: 0;
    // 定位，目前只允许相对于父元素进行定位
    positioning?: Positioning;
    // 子节点
    children: AbstractWidgetSchema[];
  };
}
