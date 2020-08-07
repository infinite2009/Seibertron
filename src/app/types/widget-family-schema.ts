import ContainerSchema from '@/interfaces/schema/container.schema';
import ComponentSchema from '@/interfaces/schema/component.schema';
import ListWidgetSchema from '@/interfaces/schema/list-widget.schema';

type WidgetFamilySchema = ContainerSchema | ComponentSchema | ListWidgetSchema;

export default WidgetFamilySchema;
