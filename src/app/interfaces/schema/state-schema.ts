import StateOperator from '@/enum/schema/state-operator.enum';
import DynamicObject from '@/interfaces/dynamic-object';

export default interface StateSchema {
  // 状态的名字，用来翻译为状态变量名，或者作为状态的注释
  name: string;
  calculation: (
    ...params
  ) => any
    | {
        operator: StateOperator;
        options: DynamicObject;
      };
}
