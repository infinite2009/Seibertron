import InsertType from '@/enum/schema/widget-type.enum';
import WidgetFamilySchema from '@/types/widget-family-schema';

export default interface InsertInfo {
  type: InsertType;
  data: WidgetFamilySchema;
}
