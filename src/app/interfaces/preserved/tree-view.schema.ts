import AbstractWidgetSchema from '../schema/abstract-widget-schema';

export default interface TreeViewSchema {
  node: AbstractWidgetSchema;
  items: TreeViewSchema[];
}
