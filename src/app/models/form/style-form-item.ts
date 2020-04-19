import IStyleFormItem from '@/interfaces/form/style-form-item';
import FormItem from '@/models/form/form-item';
import StyleValueUnit from '@/enum/style-value-unit';

export default class StyleFormItem<T> extends FormItem<T> {
  constructor(opt: IStyleFormItem<T>) {
    super(opt);
    this.unit = opt.unit || StyleValueUnit.none;
  }

  unit: string;
}
