import StyleValueType from '../enum/style-value-type';
import BorderStyle from '../enum/border-style';
import Color from './color';
import Width from './width';
import NativeEvent from './native-event';
import Layout from '../enum/layout';
import Positioning from '../enum/positioning';

export default interface WidgetSchema {
  name?: string;
  label?: string;
  layout?: Layout;
  description?: string;
  type?: string;
  styles?: {
    border?: {
      label?: string;
      style?: {
        'border-width'?: Width;
        'border-color'?: Color;
        'border-style'?: {
          type?: StyleValueType.enum;
          label?: string;
          description?: string;
          unit?: '';
          defaultValue?: string;
          items?: BorderStyle[];
        };
        'border-radius'?: Width;
      };
    };
    width?: Width;
    height?: Width;
    background?: {
      label?: string;
      image?: Color;
      color?: Color;
    };
  };
  structure?: {
    layout?: 0;
    // 想用什么标签渲染，默认 div
    tag?: string;
    // 定位，目前只允许相对于父元素进行定位
    position?: Positioning;
    children?: WidgetSchema[];
    content?: string;
  };
  events?: {
    click?: NativeEvent;
    mouseenter?: NativeEvent;
    mouseleave?: NativeEvent;
  };
}
