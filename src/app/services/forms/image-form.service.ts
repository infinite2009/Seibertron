import { Injectable } from '@angular/core';
import StyleFormItem from '@/models/form/style-form-item';
import IStyleFormItem from '@/interfaces/form/style-form-item';
import { StyleFormService } from '@/services/forms/style-form.service';
import ControlType from '@/enum/control-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ImageFormService {

  constructor() { }

  getFormItems() {
    return [
      new StyleFormItem({
        name: 'src',
        label: '图片地址',
        description: '图片地址',
        value: '',
        controlType: ControlType.text,
      } as IStyleFormItem<string>),
      new StyleFormItem({
        name: 'width',
        label: '宽度',
        description: '宽度',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxWidth',
        label: '最大宽度（0表示不作限制）',
        description: '最大宽度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minWidth',
        label: '最小宽度（0表示不作限制）',
        description: '最小宽度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'height',
        label: '高度',
        description: '高度',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'maxHeight',
        label: '最大高度（0表示不作限制）',
        description: '最大高度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'minHeight',
        label: '最小高度（0表示不作限制）',
        description: '最小高度（0表示不作限制）',
        ...StyleFormService.sizeOptionPartial,
      } as IStyleFormItem<number>),
      new StyleFormItem({
        name: 'objectFit',
        label: '填充方式',
        description: '填充方式',
        value: 'cover',
        controlType: ControlType.select,
        selectOptions: [
          {
            name: '拉伸',
            value: 'cover',
          },
          {
            name: '适应',
            value: 'container',
          },
        ]
      } as IStyleFormItem<string>),
    ];
  }
}
