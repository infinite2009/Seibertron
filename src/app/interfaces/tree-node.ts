import WidgetFamilySchema from '@/types/widget-family-schema';

export default interface WidgetTreeNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  expanded?: boolean;
  type: string;
  [key: string]: any;
  schema: WidgetFamilySchema;
  children?: WidgetTreeNode[];
}
