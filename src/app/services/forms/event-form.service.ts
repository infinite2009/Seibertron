import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import ControlType from '@/enum/control-type.enum';
import ValueType from '@/enum/value-type';

@Injectable({
  providedIn: 'root'
})
export class EventFormService {

  constructor() { }

  /*
   * 生成表单项
   *
   * @return
   */
  generateFormItems() {
    return [
      new FormItem<string>({
        name: 'target',
        desc: '该事件触发后联动的元素，可以是某个容器，组件，也可以是整个页面',
        label: '目标元素',
        controlType: ControlType.text,
        valueType: ValueType.string,
      }),
      [
        new FormItem<boolean>({
          name: 'updateState',
          desc: '修改目标元素的状态',
          label: '修改状态',
          controlType: ControlType.checkbox,
          valueType: ValueType.boolean,
          value: false,
        }),
        new FormItem<boolean>({
          name: 'updateStyle',
          desc: '修改目标元素的样式',
          label: '修改样式',
          controlType: ControlType.checkbox,
          valueType: ValueType.boolean,
          value: false,
        }),
        new FormItem<boolean>({
          name: 'updateLayout',
          desc: '修改目标元素的布局',
          label: '修改布局',
          controlType: ControlType.checkbox,
          valueType: ValueType.boolean,
          value: false,
        }),
      ]
    ];
  }
}
