import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root'
})
export class BasicFormService {

  constructor() { }

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
