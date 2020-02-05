import Layout from '../enum/layout';
import ComponentSchema from '../interfaces/component.schematics';
import BorderStyle from '../enum/border-style';
import StyleValueType from '../enum/style-value-type';
import StyleValueUnit from '../enum/style-value-unit';

const buttonSchematics: ComponentSchema = {
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
  styles: {
    border: {
      label: '边框',
      style: {
        'border-width': {
          type: StyleValueType.number,
          description: '边框的宽度',
          label: '宽度',
          unit: StyleValueUnit.px,
          defaultValue: 1
        },
        'border-color': {
          type: StyleValueType.string,
          label: '颜色',
          description: '边框的颜色',
          unit: '',
          defaultValue: '#bababa'
        },
        'border-style': {
          type: StyleValueType.enum,
          label: '类型',
          description: '边框的类型，例如实现、虚线、点划线',
          unit: '',
          defaultValue: 'solid',
          items: [
            BorderStyle.dashed,
            BorderStyle.dotted,
            BorderStyle.none,
            BorderStyle.solid,
          ],
        },
        'border-radius': {
          label: '圆角',
          type: StyleValueType.number,
          description: '按钮边框的圆角',
          unit: StyleValueUnit.px,
          defaultValue: 4,
        }
      }
    },
    width: {
      type: StyleValueType.number,
      label: '宽度',
      description: '按钮的宽度，不包括边框',
      unit: StyleValueUnit.px,
      defaultValue: 100
    },
    height: {
      label: '高度',
      type: StyleValueType.number,
      description: '按钮的高度，不包括边框',
      unit: StyleValueUnit.px,
      defaultValue: 60
    },
    background: {
      label: '背景',
      image: {
        label: '背景图片',
        type: StyleValueType.string,
        description: '背景图片',
        unit: '',
        defaultValue: ''
      },
      color: {
        type: StyleValueType.string,
        label: '颜色',
        description: '背景颜色，位于图片上层',
        unit: '',
        defaultValue: '#fff'
      }
    }
  },
  structure: {
    // 决定如何排列组件内的子元素
    layout: Layout.column,
    children: [
      {
        name: 'icon',
        label: '图标',
        description: '按钮中间显示的图标',
        type: 'icon',
      },
      {
        name: 'text',
        label: '文字',
        description: '按钮中间显示的文字',
        type: 'text',
        structure: {
          content: '我是按钮',
        },
      }
    ]
  },
  properties: {}
};

export default buttonSchematics;
