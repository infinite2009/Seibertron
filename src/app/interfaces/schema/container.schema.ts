import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import WidgetFamilySchema from '@/types/widget-family-schema';

export interface ContainerSchema extends AbstractWidgetSchema {
    // 子节点
    children: WidgetFamilySchema[];
}
