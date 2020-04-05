import StyleValueType from '@/enum/style-value-type';
import StyleValueUnit from '@/enum/style-value-unit';

export default interface SizeSchema {
  defaultValue: number;
  description: string;
  label: string;
  type: StyleValueType;
  unit: StyleValueUnit;
}
