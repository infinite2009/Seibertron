import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import IFormItem from '@/interfaces/form/form-item';
import LinkTarget from '@/enum/schema/link-target.enum';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root',
})
export class LinkFormService {

  constructor() {
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
}
