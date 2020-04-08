import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import IFormItem from '@/interfaces/form/form-item';

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
        name: 'text',
        label: '内容',
        description: '内容',
        value: '',
        required: true,
      } as IFormItem<string>),
    ];
  }
}
