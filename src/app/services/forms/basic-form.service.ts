import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import { v1 as uuid } from 'uuid';
import ControlType from '@/enum/control-type.enum';
import StyleFormItem from '@/models/form/style-form-item';
import IStyleFormItem from '@/interfaces/form/style-form-item';
import Positioning from '@/enum/schema/positioning.enum';
import IFormItem from '@/interfaces/form/form-item';
import ValueType from '@/enum/value-type';
import StyleValueUnit from '@/enum/style-value-unit';
import BorderStyle from '@/enum/border-style';
import Layout from '@/enum/layout';
import LinkTarget from '@/enum/schema/link-target.enum';
import WidgetType from '@/enum/schema/widget-type.enum';
import DynamicObject from '@/interfaces/dynamic-object';
import { AbstractWidgetSchema } from '@/interfaces/schema/abstractWidgetSchema';
import { StyleCollectionSchema } from '@/interfaces/schema/style-collection.schema';
import EventSchema from '@/interfaces/schema/event.schema';

@Injectable({
  providedIn: 'root'
})
export class BasicFormService {

  constructor() { }

  static readonly sizeOptionPartial: any = {
    value: 0,
    valueType: ValueType.number,
    required: false,
    controlType: ControlType.number,
    unit: StyleValueUnit.px,
  };

  convertFormDataToSchema(formData: DynamicObject, widgetType: WidgetType): AbstractWidgetSchema {
    switch (widgetType) {
      case WidgetType.text:
        return {
          // widget 的 id （32位 uuid）
          id: uuid(),
          // widget 的类型
          type: widgetType,
          // widget 的 语义名字，例如标题，文案
          name: formData.name,
          // 表单项名称
          label: formData.label,
          // 表单项描述
          description: formData.description,
          styles: {},
          // widget 可以发出的事件
          //       events?: {
          //         [key: string]: EventSchema,
          // },
          // widget 监听子节点的事件
          // listening: {
          //   [key: string]: EventSchema,
          // },
        };
      case WidgetType.link:
        break;
      case WidgetType.image:
        break;
      default:
        // TODO 其他类型待实现
        return ;
    }
  }

  getLayoutFormItems() {
    return [
      new FormItem({
        name: 'layout',
        label: '布局',
        value: Layout.column,
        description: '布局',
        controlType: ControlType.select,
        required: false,
        selectOptions: [
          {
            name: '列布局',
            value: Layout.column,
          },
          {
            name: '行布局',
            value: Layout.row,
          }
        ]
      } as IFormItem<string>)
    ];
  }

  getLinkFormItems() {
    return [
      new FormItem<string>({
        name: 'title',
        label: '标题',
        description: '标题',
        value: '',
        required: true,
      } as IFormItem<string>),
      new FormItem<string>({
        name: 'url',
        label: '链接',
        description: '链接',
        value: '',
        required: true,
      } as IFormItem<string>),
      new FormItem<string>({
        name: 'target',
        label: '打开位置',
        description: '打开位置',
        value: LinkTarget.blank,
        controlType: ControlType.radio,
        required: true,
        selectOptions: [
          {
            name: '原页面',
            value: LinkTarget.self,
          },
          {
            name: '新页面',
            value: LinkTarget.blank,
          },
        ],
      } as IFormItem<string>),
      new FormItem<number>({
        name: 'fontSize',
        label: '字号',
        description: '字号',
        value: 12,
        controlType: ControlType.number,
        unit: 'px',
        required: false,
      } as IFormItem<number>),
      new FormItem<string>({
        name: 'fontFamily',
        label: '字体',
        description: '字体',
        value: 'PingFang SC',
        required: true,
        controlType: ControlType.select,
        selectOptions: [
          {
            name: '苹方SC',
            value: 'PingFang SC',
          },
          {
            name: '微软雅黑',
            value: 'Microsoft YaHei',
          },
          {
            name: 'Helvetica',
            value: 'Helvetica',
          },
        ],
      } as IFormItem<string>),
      new FormItem<number>({
        name: 'lineHeight',
        label: '行高',
        description: '行高',
        value: 12,
        unit: 'px',
        required: true,
        controlType: ControlType.number,
      } as IFormItem<number>),
      new FormItem<boolean>({
        name: 'fontWeight',
        label: '加粗',
        description: '加粗',
        value: false,
        required: false,
        controlType: ControlType.checkbox,
      } as IFormItem<boolean>),
    ];
  }


  getBorderFormItems() {
    return [
      new StyleFormItem({
        name: 'borderWidth',
        label: '边框粗细',
        description: '边框',
        ...BasicFormService.sizeOptionPartial,
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
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
    ];
  }

  getWidthFormItems() {
    return [
      new StyleFormItem({
        name: 'width',
        label: '宽度',
        description: '宽度',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxWidth',
        label: '最大宽度',
        description: '最大宽度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minWidth',
        label: '最小宽度',
        description: '最小宽度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
    ];
  }

  getHeightFormItems() {
    return [
      new StyleFormItem({
        name: 'height',
        label: '高度',
        description: '高度',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxHeight',
        label: '最大高度',
        description: '最大高度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minHeight',
        label: '最小高度',
        description: '最小高度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
    ];
  }

  getTextFormItems() {
    return [
      new FormItem<string>({
        name: 'text',
        label: '内容',
        description: '内容',
        value: '',
        required: true,
        controlType: ControlType.text,
      } as IFormItem<string>),
      new FormItem<number>({
        name: 'fontSize',
        label: '字号',
        description: '字号',
        value: 12,
        controlType: ControlType.number,
        unit: 'px',
        required: false,
      } as IFormItem<number>),
      new FormItem<string>({
        name: 'fontFamily',
        label: '字体',
        description: '字体',
        value: 'PingFang SC',
        required: true,
        controlType: ControlType.select,
        selectOptions: [
          {
            name: '苹方SC',
            value: 'PingFang SC'
          },
          {
            name: '微软雅黑',
            value: 'Microsoft YaHei'
          },
          {
            name: 'Helvetica',
            value: 'Helvetica'
          }
        ]
      } as IFormItem<string>),
      new FormItem<number>({
        name: 'lineHeight',
        label: '行高',
        description: '行高',
        value: 12,
        unit: 'px',
        required: true,
        controlType: ControlType.number,
      } as IFormItem<number>),
      new FormItem<boolean>({
        name: 'fontWeight',
        label: '加粗',
        description: '加粗',
        value: false,
        required: false,
        controlType: ControlType.checkbox,
      } as IFormItem<boolean>),
    ];
  }


  getPositioningFormItems() {
    return [
      new FormItem({
        name: 'positioning',
        label: '定位',
        description: '定位',
        value: Positioning.static,
        controlType: ControlType.select,
        required: false,
        selectOptions: [
          {
            name: '默认',
            value: Positioning.static,
          },
          {
            name: '相对定位',
            value: Positioning.relative,
          },
          {
            name: '绝对定位',
            value: Positioning.absolute,
          },
          {
            name: '固定定位',
            value: Positioning.fixed,
          },
          {
            name: '粘性定位',
            value: Positioning.sticky,
          },
        ]
      } as IFormItem<Positioning>)
    ];
  }


  getImageFormItems() {
    return [
      new StyleFormItem({
        name: 'src',
        label: '图片地址',
        description: '图片地址',
        value: '',
        controlType: ControlType.text,
      } as IStyleFormItem<string>),
      new StyleFormItem({
        name: 'width',
        label: '宽度',
        description: '宽度',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxWidth',
        label: '最大宽度（0表示不作限制）',
        description: '最大宽度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minWidth',
        label: '最小宽度（0表示不作限制）',
        description: '最小宽度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'height',
        label: '高度',
        description: '高度',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxHeight',
        label: '最大高度（0表示不作限制）',
        description: '最大高度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minHeight',
        label: '最小高度（0表示不作限制）',
        description: '最小高度（0表示不作限制）',
        ...BasicFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'objectFit',
        label: '填充方式',
        description: '填充方式',
        value: 'cover',
        controlType: ControlType.select,
        selectOptions: [
          {
            name: '拉伸',
            value: 'cover',
          },
          {
            name: '适应',
            value: 'container',
          },
        ]
      } as IStyleFormItem<string>),
    ];
  }

  getBasicFormItems() {
    return [
      new FormItem({
        name: 'name',
        label: '名称',
        description: '名称',
        value: '',
        required: true,
        controlType: ControlType.text,
      }),
      new FormItem({
        name: 'desc',
        label: '描述',
        description: '描述',
        value: '',
        required: true,
        controlType: ControlType.text,
      }),
    ];
  }
}
