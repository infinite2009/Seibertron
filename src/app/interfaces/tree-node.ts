export default interface WidgetTreeNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  expanded?: boolean;
  type: string;
  [key: string]: any;
  children?: WidgetTreeNode[];
}
