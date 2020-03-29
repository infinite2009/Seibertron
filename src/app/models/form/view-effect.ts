import BaseFormItem from '@/models/form/base-form-item';
import { IFormItemOptions } from '@/interfaces/form-item';

export default class ViewEffect extends BaseFormItem<string> {
  constructor(options: IFormItemOptions<string>) {
    super(options);
    this.type = options.type || '';
  }

  controlType: string = 'input';
}
