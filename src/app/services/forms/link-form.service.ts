import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import IFormItem from '@/interfaces/form/form-item';
import LinkTarget from '@/enum/schema/link-target.enum';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LinkFormService {

  constructor() { }

  getLinkFormItems() {
    return [
      new FormItem<string>({
        name: 'name',
        label: '元素名称',
        description: '元素名称',
        value: '',
        required: true,
      } as IFormItem<string>),
      new FormItem<string>({
        name: 'desc',
        label: '描述',
        description: '描述',
        value: '',
        required: true,
      } as IFormItem<string>),
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
    ];
  }
}
