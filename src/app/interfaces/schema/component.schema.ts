/*
 * 类比于 Flutter 的 StatefulWidget, 相比于
 */
import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import DynamicObject from '@/interfaces/dynamic-object';
import { ContainerSchema } from '@/interfaces/schema/container.schema';

export interface ComponentSchema extends AbstractWidgetSchema {
  containerSchema: ContainerSchema;
  // 组件的功能选项，目前还不知道怎么设计
  options: DynamicObject;
  state: DynamicObject;
}
