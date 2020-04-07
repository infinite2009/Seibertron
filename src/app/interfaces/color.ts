import ValueType from '../enum/value-type';

export default interface Color {
  type: ValueType.string;
  label: string;
  description: string;
  defaultValue: string;
}
