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
  structure: {
    layout: 0,
    children: [
      {
        name: 'icon',
        label: '图标',
        description: '按钮中间显示的图标',
        type: 'icon',
        defaultValue: '',
        $ref: './widget.schematics.json#definition/styles'
      },
      {
        name: 'text',
        label: '文字',
        description: '按钮中间显示的文字',
        type: 'text',
        defaultValue: '按钮',
        $ref: './text.schematics.json#definition/styles'
      }
    ]
  },
  properties: {}
};

export default buttonSchematics;
