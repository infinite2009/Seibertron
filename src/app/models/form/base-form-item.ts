import { IFormItemOptions } from '@/interfaces/form-item';

export default class BaseFormItem<T> {
  constructor(options: IFormItemOptions<T> = {}) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.required = options.required;
    this.order = options.order;
    this.controlType = options.controlType;
    this.type = options.type;
    this.options = options.options;
  }

  value: T;
  key: string = '';
  label: string = '';
  required: boolean = true;
  order: number = 0;
  controlType: string = '';
  type: string = '';
  options: {
    key: string;
    value: string;
  }[] = [];
}
