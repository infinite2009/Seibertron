import IFormItem from '@/interfaces/form/form-item';
import ValueType from '@/enum/value-type';
import ControlType from '@/enum/control-type.enum';

export default class FormItem<T = string> {
  constructor(opt: IFormItem<T>) {
    this.name = opt.name;
    this.value = opt.value;
    this.label = opt.label;
    this.valueType = opt.valueType;
    this.description = opt.description;
    this.errorMsg = opt.errorMsg;
    this.required = opt.required;
    this.controlType = opt.controlType;
    this.selectOptions = opt.selectOptions || [];
    this.validator = opt.validator || (() => true);
  }

  name: string;
  value: T;
  label: string;
  valueType: ValueType;
  description: string;
  errorMsg: string;
  required: boolean = true;
  selectOptions?: { name: string; value: any; }[];
  controlType: ControlType = ControlType.text;
  validator: (() => boolean) = () => true;
}