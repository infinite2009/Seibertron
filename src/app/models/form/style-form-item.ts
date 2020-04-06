import IStyleFormItem from '@/interfaces/form/form-item';
import StyleValueType from '@/enum/style-value-type';

export default class StyleFormItem<T> {
  constructor(opt: IStyleFormItem<T>) {
    this.name = opt.name;
    this.unit = opt.unit;
    this.value = opt.value;
    this.label = opt.label;
    this.valueType = opt.valueType;
    this.description = opt.description;
    this.errorMsg = opt.errorMsg;
    this.required = opt.required;
    this.selectOptions = opt.selectOptions;
  }

  name: string;
  unit: string;
  value: T;
  label: string;
  valueType: StyleValueType;
  description: string;
  errorMsg: string;
  required: boolean;
  selectOptions?: string[];
}
