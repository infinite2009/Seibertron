import AbstractWidgetSchema from '@/interfaces/schema/abstract-widget-schema';
import WidgetFamilySchema from '@/types/widget-family-schema';

export default interface ContainerSchema extends AbstractWidgetSchema {
    // 子节点
    children: WidgetFamilySchema[];
}
