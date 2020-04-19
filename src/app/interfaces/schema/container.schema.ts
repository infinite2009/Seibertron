import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import WidgetSchema from '@/interfaces/schema/widget.schema';
import { ComponentSchema } from '@/interfaces/schema/component.schema';

export interface ContainerSchema extends AbstractWidgetSchema {
    // 子节点
    children: (ContainerSchema | WidgetSchema | ComponentSchema)[];
}
