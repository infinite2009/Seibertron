import { Injectable } from '@angular/core';
import BaseFormItem from '@/models/form/base-form-item';
import Size from '@/models/form/size';
import Toggle from '@/models/form/toggle';

@Injectable({
  providedIn: 'root'
})
export class TextFormService {

  constructor() {
  }

  getFormItems() {
    return [
      new BaseFormItem<string>({
        key: 'text',
        label: '文字',
        controlType: 'input',
        required: true,
      }),
      new Size({
        key: 'fontSize',
        label: '字号',
        value: 12,
      }),
      new Toggle({
        key: 'fontWeight',
        label: '加粗',
        type: 'checkbox',
        checked: false,
        value: false,
      }),
      new Size({
        key: 'lineHeight',
        label: '行高',
      }),
      new BaseFormItem<number>({
        key: 'ellipsis',
        label: '省略',
        type: 'number',
        controlType: 'input',
      }),
    ];
  }
}
