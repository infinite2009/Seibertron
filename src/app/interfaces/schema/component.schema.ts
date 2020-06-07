/*
 * 类比于 Flutter 的 StatefulWidget, 相比于
 */
import { AbstractWidgetSchema } from '@/interfaces/schema/abstract-widget-schema';
import DynamicObject from '@/interfaces/dynamic-object';
import { ContainerSchema } from '@/interfaces/schema/container.schema';
import DataSourceSchema from '@/interfaces/schema/data-source.schema';
import EventSchema from '@/interfaces/schema/event.schema';
import StateSchema from '@/interfaces/schema/state-schema';

export interface ComponentSchema extends AbstractWidgetSchema {
  containerSchema: ContainerSchema;
  // 组件的功能选项，目前还不知道怎么设计
  props: {
    dataSourceSchema?: DataSourceSchema,
    // 触发的事件的
    emit?: DynamicObject;
    [key: string]: any,
  };
  // 组件持有的状态
  stateSchema?: {
    [key: string]: StateSchema;
  };
  // 组件内部的交互事件
  events?: {
    [key: string]: EventSchema;
  };
}
