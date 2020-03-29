import BaseFormItem from '@/models/form/base-form-item';
import { IFormItemOptions } from '@/interfaces/form-item';

export default class Size extends BaseFormItem<number> {
  constructor(options: IFormItemOptions<number>) {
    super(options);
    this.type = options.type || 'number';
  }

  controlType: string = 'input';
}
