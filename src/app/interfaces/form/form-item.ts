import ValueType from '@/enum/value-type';
import ControlType from '@/enum/control-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import WidgetTreeNode from '@/interfaces/tree-node';

export default interface IFormItem<T> {
  // 表单名称
  name: string;
  // 表单项的名称
  label: string;
  // 表单的值
  value?: T;
  // 表单控件类型
  controlType?: ControlType;
  // 表单值的类型
  valueType?: ValueType;
  // 表单项的描述
  desc: string;
  // 错误信息
  errorMsg?: string;
  // 表单项是否为必填项
  required?: boolean;
  // 验证器
  validator?: () => boolean;
  // 填写表单项用的选项
  selectOptions?: { name: string; value: any }[];
  options?: DynamicObject;
  widgetTree?: WidgetTreeNode[];
}
