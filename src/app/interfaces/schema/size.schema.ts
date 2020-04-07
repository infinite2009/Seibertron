import ValueType from '@/enum/value-type';
import StyleValueUnit from '@/enum/style-value-unit';

export default interface SizeSchema {
  defaultValue: number;
  description: string;
  label: string;
  type: ValueType;
  unit: StyleValueUnit;
}
