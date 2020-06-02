import StateOperator from '@/enum/schema/state-operator.enum';

export default interface StateSchema {
  // 状态的名字，用来翻译为状态变量名，或者作为状态的注释
  name: string;
  calculation: {
    operator: StateOperator;
    input: any[];
    output: any;
  };
}
