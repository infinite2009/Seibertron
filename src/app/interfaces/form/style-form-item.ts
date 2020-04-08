import IFormItem from '@/interfaces/form/form-item';
import StyleValueUnit from '@/enum/style-value-unit';

export default interface IStyleFormItem<T> extends IFormItem<T> {
  unit: StyleValueUnit;
}
