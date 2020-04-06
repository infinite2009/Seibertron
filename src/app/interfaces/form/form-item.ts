import StyleValueType from '@/enum/style-value-type';

export default interface FormItem<T> {
  name: string;
  value: T;
  label: string;
  valueType: StyleValueType;
  description: string;
  errorMsg: string;
  required: boolean;
  selectOptions?: string[];
}
