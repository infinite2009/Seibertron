import EventType from '@/enum/schema/event-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';

export default interface EventSchema {
  // 触发事件的 widget 或者组件的 id （32位 uuid）
  sourceId: string;
  // 事件的语义化名称
  name: string;
  // 事件的类型
  eventType: EventType;
  payload: DynamicObject;
  // 接收事件的 widget 或者组件的 id （32位 uuid）
  targetId: string;
  /*
   * 事件的hook函数，如果传入这个函数，会覆盖事件本来的逻辑
   *
   * @param { origin: () => {} } 原事件函数
   */
  hook?: (origin: () => {}) => {};
}
