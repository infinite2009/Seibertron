export default interface WidgetTreeNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  expanded?: boolean;
  children?: WidgetTreeNode[];
}
