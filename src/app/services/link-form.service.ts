import { Injectable } from '@angular/core';
import { TextFormService } from '@/services/text-form.service';
import BaseFormItem from '@/models/form/base-form-item';

@Injectable({
  providedIn: 'root',
})
export class LinkFormService extends TextFormService {

  constructor() {
    super();
  }

  getFormItems() {
    return super.getFormItems().concat([
      new BaseFormItem<string>({
        key: 'text',
        label: '超链接',
        type: 'text',
        controlType: 'input',
      }),
    ]);
  }
}
