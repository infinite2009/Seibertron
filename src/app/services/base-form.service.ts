import { Injectable } from '@angular/core';
import BaseFormItem from '@/models/form/base-form-item';

@Injectable({
  providedIn: 'root'
})
export class BaseFormService {

  constructor() { }

  getFormItems(titleName: string) {
    return [
      new BaseFormItem({
        key: 'title',
        label: '节点名称',
        controlType: 'input',
        value: titleName,
        required: true,
      }),
      new BaseFormItem({
        key: 'desc',
        label: '描述',
        controlType: 'input',
      })
    ];
  }
}
