import WidgetSchema from '@/interfaces/schema/widget.schema';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import { ComponentSchema } from '@/interfaces/schema/component.schema';

export default interface WidgetTreeNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  expanded?: boolean;
  type: string;
  [key: string]: any;
  schema: WidgetSchema | ContainerSchema | ComponentSchema;
  children?: WidgetTreeNode[];
}
