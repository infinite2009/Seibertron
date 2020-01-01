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
const constructors: Dictionary<{ constructor, data }> = {
  button: {
    constructor: ButtonComponent,
    data: {
      styles: {
        // bfc
        border: {
          width: 0,
          style: 'solid',
          color: 'transparent',
          radius: 0,
        },
        size: {
          height: 80,
          width: 100,
        },
        background: {
          color: 'transparent',
          img: null,
        },
        shadow: {
          // offsetX
          // offsetY
          // blur
        },
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
