import { Injectable } from '@angular/core';
import BaseFormItem from '@/models/form/base-form-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(formItems: BaseFormItem<any>[]) {
    const group: any = [];
    formItems.forEach((item: BaseFormItem<any>) => {
      // 改验证器
      group[item.key] = item.required ?
        new FormControl(item.value || '', Validators.required) : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }
}
