const widgetSchematics = {
  styles: {
    border: {
      label: '边框',
      style: {
        'border-width': {
          type: 'number',
          description: '边框的宽度',
          label: '宽度',
          unit: 'px',
          defaultValue: 1
        },
        'border-color': {
          type: 'string',
          label: '颜色',
          description: '边框的颜色',
          unit: '',
          defaultValue: '#bababa'
        },
        'border-style': {
          type: 'enum',
          label: '类型',
          description: '边框的类型，例如实现、虚线、点划线',
          unit: '',
          defaultValue: 'solid',
          items: [
            'dashed',
            'dotted',
            'solid',
            'none'
          ]
        },
        'border-radius': {
          label: '圆角',
          type: 'number',
          description: '按钮边框的圆角',
          unit: 'px',
          defaultValue: '4'
        }
      }
    },
    width: {
      type: 'number',
      label: '宽度',
      description: '按钮的宽度，不包括边框',
      unit: 'px',
      defaultValue: 100
    },
    height: {
      label: '高度',
      type: 'number',
      description: '按钮的高度，不包括边框',
      unit: 'px',
      defaultValue: 60
    },
    background: {
      label: '背景',
      image: {
        label: '背景图片',
        type: 'string',
        description: '背景图片',
        unit: '',
        defaultValue: ''
      },
      color: {
        type: 'string',
        label: '颜色',
        description: '背景颜色，位于图片上层',
        unit: '',
        defaultValue: '#fff'
      }
    }
  },
  events: {
    click: {
      label: '点击',
      triggerEvent: [
        'click'
      ]
    },
    hover: {
      label: '点击',
      triggerEvent: [
        'mouseenter',
        'mouseleave'
      ]
    }
  }
};

export default widgetSchematics;
