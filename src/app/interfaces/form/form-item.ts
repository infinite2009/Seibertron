import StyleValueType from '@/enum/style-value-type';
import { StyleSchema } from '@/interfaces/schema/style.schema';

export default interface IStyleFormItem<T> extends StyleSchema<T> {
  // 表单项的名称
  label: string;
  // 表单值的类型
  valueType: StyleValueType;
  // 表单项的描述
  description: string;
  // 错误信息
  errorMsg: string;
  // 表单项是否为必填项
  required: boolean;
  // 填写表单项用的选项
  selectOptions?: string[];
}
