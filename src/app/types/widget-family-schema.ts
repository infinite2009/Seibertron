import WidgetSchema from '@/interfaces/schema/widget.schema';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import { ComponentSchema } from '@/interfaces/schema/component.schema';

type WidgetFamilySchema = WidgetSchema | ContainerSchema | ComponentSchema;

export default WidgetFamilySchema;
