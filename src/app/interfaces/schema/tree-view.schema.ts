import { AbstractWidgetSchema } from '@/interfaces/schema/abstract-widget-schema';

export default interface TreeViewSchema {
  node: AbstractWidgetSchema;
  items: TreeViewSchema[];
}
