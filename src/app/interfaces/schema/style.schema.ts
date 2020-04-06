import StyleValueType from '@/enum/style-value-type';

export interface StyleSchema<T> {
  // 样式是否可以穷举
  valueType?: StyleValueType;
  // 属性名
  propertyName: string;
  // 属性值
  value: T;
  // 表单项名称
  label?: string;
  // 表单项描述
  description?: string;
  // 样式的单位
  unit?: string;
  // 默认值
  defaultValue?: string | number;
  // 样式的可选项
  selectOptions?: string[];
}
