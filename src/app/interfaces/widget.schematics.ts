import StyleValueType from '../enum/style-value-type';
import BorderStyle from '../enum/border-style';
import Color from './color';
import Width from './width';
import NavtiveEvent from './native-event';

export default interface WidgetSchema {
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
  events?: {
    click?: NavtiveEvent;
    mouseenter?: NavtiveEvent;
    mouseleave?: NavtiveEvent;
  };
}
