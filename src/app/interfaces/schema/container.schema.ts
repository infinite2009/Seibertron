import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';

export interface ContainerSchema extends AbstractWidgetSchema {
    // 子节点
    children: AbstractWidgetSchema[];
}
