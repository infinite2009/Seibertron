import EventType from '@/enum/schema/event-type.enum';
import StateOperator from '@/enum/schema/state-operator.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import { StyleCollectionSchema } from '@/interfaces/schema/style-collection.schema';

/*
 * 触发类型
 * isolated 表示点击这个元素触发事件，
 * listItem 表示这是个列表项，或者是列表项内的一个元素
 * column
 */
enum TriggerType {
  isolated = 'isolated',
  listItem = 'listItem',
  columnItem = 'columnItem',
  rowItem = 'rowItem',
}

/*
 * 联动类型
 */
enum LinkageType {
  isolated= 'isolated',
  listItem = 'listItem',
  columnItem = 'columnItem',
  rowItem = 'rowItem'
}

export default interface EventSchema {
  // 事件的语义化的助记名称
  name: string;
  // 事件的类型
  eventType: EventType;
  // 触发事件的 widget 或者组件的 id （32位 uuid）
  sourceWidget: {
    // widget的 uuid
    id: string;
    // 事件的触发类型，孤立元素，列表项，行，列
    type: TriggerType;
  };
  payload: DynamicObject;
  targetWidget: {
    // 接收事件的 widget 或者组件的 id （32位 uuid）
    id: string;
    // 联动类型
    type: LinkageType;
    // 联动元素的索引范围，仅限联动类型为非孤立元素的情况
    indexes?: {
      start?: number;
      end?: number;
    },
    // 返回值为 true时，元素可以联动，仅限联动类型为非孤立元素的情况
    callback?: (item, index) => boolean;
  };
  // 联动效果
  effect: {
    // 视觉效果，例如颜色、盒模型、定位、布局等
    styles: StyleCollectionSchema;
    // 状态计算，比如刷新数据，过滤，归并，排序等
    stateCalculation: (...params) => any | {
      operator: StateOperator;
      // TODO 还没想好
      option: DynamicObject;
    };
  }
  /*
   * 事件的hook函数，如果传入这个函数，会覆盖事件本来的逻辑
   *
   * @param { origin: () => {} } 原事件函数
   */
  hook?: (origin: (...params) => {}) => {};
}
