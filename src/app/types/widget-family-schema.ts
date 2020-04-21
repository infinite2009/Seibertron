import { ContainerSchema } from '@/interfaces/schema/container.schema';
import { ComponentSchema } from '@/interfaces/schema/component.schema';

type WidgetFamilySchema = ContainerSchema | ComponentSchema;

export default WidgetFamilySchema;
