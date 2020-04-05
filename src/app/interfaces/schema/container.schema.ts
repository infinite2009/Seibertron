import { ComponentSchema } from '@/interfaces/schema/component.schema';
import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';

export interface ContainerSchema extends AbstractWidgetSchema {
  children: (AbstractWidgetSchema | ComponentSchema)[];
}
