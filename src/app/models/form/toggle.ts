import { IFormItemOptions } from '@/interfaces/form-item';
import BaseFormItem from '@/models/form/base-form-item';

export default class Toggle extends BaseFormItem<boolean> {
  constructor(options: IFormItemOptions<boolean> = {}) {
    super(options);
    this.type = options.type || '';
    this.checked = options.checked || false;
  }

  controlType: string = 'checkbox';
  checked: boolean;
}
