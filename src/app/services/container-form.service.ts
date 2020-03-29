import { Injectable } from '@angular/core';
import Size from '@/models/form/size';
import ViewEffect from '@/models/form/view-effect';

@Injectable({
  providedIn: 'root',
})
export class ContainerFormService {

  constructor() {
  }

  getFormItems() {
    return [
      new Size({
        key: 'margin',
        label: '外边距',
        value: 10,
      }),
      new Size({
        key: 'border',
        label: '边框',
        value: 1,
      }),
      new Size({
        key: 'padding',
        label: '内衬',
        value: 10,
      }),
      new Size({
        key: 'content',
        label: '内容',
        value: 20,
      }),
      new ViewEffect({
        key: 'backgroundColor',
        label: '背景颜色',
      }),
      new ViewEffect({
        key: 'backgroundImage',
        label: '背景图片',
      }),
      new ViewEffect({
        key: 'boxShadow',
        label: '阴影',
      }),
    ];
  }
}
