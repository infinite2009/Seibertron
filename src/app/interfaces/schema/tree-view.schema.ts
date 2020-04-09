import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';

export default interface TreeViewSchema {
  node: AbstractWidgetSchema;
  items: TreeViewSchema[];
}
