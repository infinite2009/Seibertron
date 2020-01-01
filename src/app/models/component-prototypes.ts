import {ComponentProperties, Dictionary, SelectOption} from '../interfaces/base';
import {ButtonComponent} from '../shared-module/component-prototypes/button/button.component';
import {SelectComponent} from '../shared-module/component-prototypes/selector/select.component';

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
const constructors: Dictionary<{ constructor, data: Partial<ComponentProperties> }> = {
  button: {
    constructor: ButtonComponent,
    data: {
      styles: {
        'border-width': '1px',
        'border-style': 'solid',
        'border-color': '#bababa',
        'border-radius': '4px',
        height: '40px',
        width: '60px',
        'background-color': '#fff',
        'background-image': null,
        'background-repeat': 'no-repeat',
        'box-shadow': 'none',
      },
      events: {
        click: () => {
        },
        hover: () => {
        },
      },
      data: {
        content: '按钮',
        icon: '😀',
      }
    }
  },
  select: {
    constructor: SelectComponent,
    data: {}
  }
};

const withComponentEntries = () => {
  return Object.values(constructors).map(item => item.constructor);
};

export {
  componentPrototypeList,
  constructors,
  withComponentEntries
};
