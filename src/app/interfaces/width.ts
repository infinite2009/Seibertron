import ValueType from '../enum/value-type';
import StyleValueUnit from '../enum/style-value-unit';

export default interface Width {
  defaultValue: number;
  desc: string;
  label: string;
  type: ValueType.number;
  unit: StyleValueUnit;
}
