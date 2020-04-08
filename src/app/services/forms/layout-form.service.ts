import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import IFormItem from '@/interfaces/form/form-item';
import Layout from '@/enum/layout';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutFormService {

  constructor() { }

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
}
