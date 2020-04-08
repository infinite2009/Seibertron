import { Injectable } from '@angular/core';
import StyleFormItem from '@/models/form/style-form-item';
import ValueType from '@/enum/value-type';
import ControlType from '@/enum/control-type.enum';
import StyleValueUnit from '@/enum/style-value-unit';
import IStyleFormItem from '@/interfaces/form/style-form-item';
import BorderStyle from '@/enum/border-style';

@Injectable({
  providedIn: 'root'
})
export class StyleFormService {

  constructor() { }

  static readonly sizeOptionPartial: any = {
    value: 0,
    valueType: ValueType.number,
    required: false,
    controlType: ControlType.number,
    unit: StyleValueUnit.px,
  };

  getBorderFormItems() {
    return [
      new StyleFormItem({
        name: 'borderWidth',
        label: '边框粗细',
        description: '边框',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'borderStyle',
        label: '边框样式',
        description: '边框样式',
        value: BorderStyle.solid,
        valueType: ValueType.number,
        required: false,
        controlType: ControlType.select,
        selectOptions: [
          {
            name: '实线',
            value: BorderStyle.solid,
          },
          {
            name: '虚线',
            value: BorderStyle.dashed,
          },
          {
            name: '点线',
            value: BorderStyle.dotted,
          },
          {
            name: '无边框',
            value: BorderStyle.none,
          },
        ],
      } as IStyleFormItem<BorderStyle>),
      new StyleFormItem({
        name: 'borderColor',
        label: '边框颜色',
        description: '边框颜色',
        value: '#fff',
        valueType: ValueType.number,
        required: false,
        controlType: ControlType.text,
      } as IStyleFormItem<string>),
      new StyleFormItem({
        name: 'borderRadius',
        label: '边框圆角半径',
        description: '边框圆角半径',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
    ];
  }

  getWidthFormItems() {
    return [
      new StyleFormItem({
        name: 'width',
        label: '宽度',
        description: '宽度',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxWidth',
        label: '最大宽度（0表示不作限制）',
        description: '最大宽度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minWidth',
        label: '最小宽度（0表示不作限制）',
        description: '最小宽度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
    ];
  }

  getHeightFormItems() {
    return [
      new StyleFormItem({
        name: 'height',
        label: '高度',
        description: '高度',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxHeight',
        label: '最大高度（0表示不作限制）',
        description: '最大高度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minHeight',
        label: '最小高度（0表示不作限制）',
        description: '最小高度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
    ];
  }
}
