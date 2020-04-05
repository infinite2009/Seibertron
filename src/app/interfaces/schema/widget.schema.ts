import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import DataMappingSchema from '@/interfaces/schema/data-mapping.schema';

export default interface WidgetSchema extends AbstractWidgetSchema {
  dataMapping: DataMappingSchema;
}
