import StyleValueType from '../enum/style-value-type';

export default interface Color {
  type: StyleValueType.string;
  label: string;
  description: string;
  unit: '';
  defaultValue: string;
}
