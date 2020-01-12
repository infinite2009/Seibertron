import StyleValueType from '../enum/style-value-type';
import StyleValueUnit from '../enum/style-value-unit';

export default interface Width {
  defaultValue: number;
  description: string;
  label: string;
  type: StyleValueType.number;
  unit: StyleValueUnit;
}
