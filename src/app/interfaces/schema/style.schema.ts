import StyleValueType from '@/enum/style-value-type';

export interface StyleSchema {
  // 样式是否可以穷举
  type?: StyleValueType.enum;
  // 属性名
  propertyName: string;
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
