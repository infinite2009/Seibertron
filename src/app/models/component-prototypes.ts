import { Dictionary, SelectOption } from '../interfaces/base';
import { ButtonComponent } from '../shared-module/component-prototypes/button/button.component';
import { SelectComponent } from '../shared-module/component-prototypes/selector/select.component';

const componentPrototypeList: SelectOption[] = [
  {
    id: 'button',
    name: '按钮'
  },
  {
    id: 'select',
    name: '选择器'
  }
];

// 暂时不知道这些类到底是什么类型
const constructors: Dictionary<any> = {
  button: ButtonComponent,
  select: SelectComponent
};

const withComponentEntries = () => {
  return Object.values(constructors);
};

export {
  componentPrototypeList,
  constructors,
  withComponentEntries
};
