import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import IFormItem from '@/interfaces/form/form-item';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root'
})
export class TextFormService {

  constructor() { }

  getTextFormItems() {
    return [
      new FormItem<string>({
        name: 'name',
        label: '元素名称',
        description: '元素名称',
        value: '',
        controlType: ControlType.text,
        required: true,
      } as IFormItem<string>),
      new FormItem<string>({
        name: 'desc',
        label: '描述',
        description: '描述',
        value: '',
        controlType: ControlType.text,
        required: true,
      } as IFormItem<string>),
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
}
