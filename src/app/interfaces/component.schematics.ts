import WidgetSchema from './widget.schematics';

export default interface ComponentSchema extends WidgetSchema {
  // 组件的内部状态
  state: {
    [key: string]: any;
  };
// 组件暴露给父组件的属性
  props: {
    [key: string]: any;
  };
}
