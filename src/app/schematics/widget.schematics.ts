import WidgetSchema from '../interfaces/widget.schematics';
import StyleValueUnit from '../enum/style-value-unit';
import StyleValueType from '../enum/style-value-type';
import BorderStyle from '../enum/border-style';

const widgetSchematics: WidgetSchema = {
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
            BorderStyle.solid,
            BorderStyle.none,
            BorderStyle.dotted,
            BorderStyle.dashed,
          ]
        },
        'border-radius': {
          label: '圆角',
          type: StyleValueType.number,
          description: '按钮边框的圆角',
          unit: StyleValueUnit.px,
          defaultValue: 4
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
  events: {}
};

export default widgetSchematics;
