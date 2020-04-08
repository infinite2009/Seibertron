import { Injectable } from '@angular/core';
import FormItem from '@/models/form/form-item';
import IFormItem from '@/interfaces/form/form-item';
import Positioning from '@/enum/schema/positioning.enum';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root'
})
export class PositioningService {

  constructor() { }

  getPositioningFormItems() {
    return [
      new FormItem({
        name: 'positioning',
        label: '定位',
        description: '定位',
        value: Positioning.static,
        controlType: ControlType.select,
        required: false,
        selectOptions: [
          {
            name: '默认',
            value: Positioning.static,
          },
          {
            name: '相对定位',
            value: Positioning.relative,
          },
          {
            name: '绝对定位',
            value: Positioning.absolute,
          },
          {
            name: '固定定位',
            value: Positioning.fixed,
          },
          {
            name: '粘性定位',
            value: Positioning.sticky,
          },
        ]
      } as IFormItem<Positioning>)
    ];
  }
}
