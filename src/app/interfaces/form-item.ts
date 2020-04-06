export interface IFormItemOptions<T> {
  // 表单项的值
  value?: T;
  // 表单项的变量名（会被映射为 style schema 的 propertyName
  name?: string;
  // 表单项名称
  label?: string;
  // 该表单项是否是必需值
  required?: boolean;
  // 该表单项使用什么类型的控件
  controlType?: string;
}
