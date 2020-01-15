import widgetSchematics from './widget.schematics';
import Layout from '../enum/layout';

const buttonSchematics = {
  name: 'button',
  label: '按钮',
  type: 'component',
  // 组件的内部状态
  state: {},
  // 组件暴露给父组件的属性
  props: {
    disabled: {
      stateMapping: ''
    },
    onClick: {
      trigger: 'click',
      invoke: ''
    },
    onHover: {
      composition: {
        active: {
          target: 'mouseenter',
          invoke: ''
        },
        inactive: {
          target: 'mouseleave',
          invoke: ''
        }
      }
    }
  },
  // 指导渲染器渲染组件模板
  structure: {
    // 决定如何排列组件内的子元素
    layout: Layout.column,
    children: [
      {
        name: 'icon',
        label: '图标',
        description: '按钮中间显示的图标',
        type: 'icon',
        defaultValue: '',
        styles: widgetSchematics.styles,
      },
      {
        name: 'text',
        label: '文字',
        description: '按钮中间显示的文字',
        type: 'text',
        defaultValue: '按钮',
        styles: widgetSchematics.styles,
      }
    ]
  },
  properties: {}
};

export default buttonSchematics;
