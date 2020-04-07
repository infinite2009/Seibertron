import IFormItem from '@/interfaces/form/form-item';

export default interface IStyleFormItem<T> extends IFormItem<T> {
  unit: string;
}
