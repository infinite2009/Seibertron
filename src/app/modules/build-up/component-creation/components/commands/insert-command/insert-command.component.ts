import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { BasicFormService } from '@/services/forms/basic-form.service';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';
import WidgetType from '@/enum/schema/widget-type.enum';

@Component({
  selector: 'seibertron-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.less'],
})
export class InsertCommandComponent implements OnInit {

  constructor(
    private basicFormService: BasicFormService,
    private formBuilder: FormBuilder,
  ) {
  }

  formGroups: {
    name: string;
    items: (FormItem<any> | StyleFormItem<any>)[];
  }[] = [];

  validateForm: FormGroup;

  visible: boolean = false;

  currentType: WidgetType = null;

  commands: any[] = [
    {
      name: '容器',
      type: 'container',
      handler: this.handleInserting.bind(this, this, WidgetType.container),
    },
    {
      name: '文本',
      type: 'text',
      handler: this.handleInserting.bind(this, this, WidgetType.text),
    },
    {
      name: '链接',
      type: 'link',
      handler: this.handleInserting.bind(this, this, WidgetType.link),
    },
    {
      name: '列表',
      type: 'list',
      handler: this.handleInserting.bind(this, this, WidgetType.list),
    },
    {
      name: '表格',
      type: 'table',
      handler: this.handleInserting.bind(this, this, WidgetType.table),
    },
    {
      name: '图片',
      type: 'image',
      handler: this.handleInserting.bind(this, this, WidgetType.image),
    },
    {
      name: '表单',
      type: 'form',
      handler: this.handleInserting.bind(this, this, WidgetType.form),
    },
    {
      name: '数据源',
      type: 'dataSource',
      handler: this.handleInsertingDataSource.bind(this, this),
    }
  ];

  @Input()
  selectedKey: string;

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  ngOnInit() {
    this.validateForm = this.formBuilder.group({});
  }

  /* event handlers */
  handleInserting(thisArg, currentType) {
    this.visible = true;
    this.currentType = currentType;
    switch (currentType) {
      case WidgetType.container:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '边框',
            items: [
              ...this.basicFormService.getMarginFormItems(),
              ...this.basicFormService.getBorderFormItems(),
              ...this.basicFormService.getPaddingFormItems(),
            ],
          },
          {
            name: '高度',
            items: this.basicFormService.getHeightFormItems(),
          },
          {
            name: '宽度',
            items: this.basicFormService.getWidthFormItems(),
          },
          {
            name: '子元素对齐方式',
            items: this.basicFormService.getAlignmentFormItems(),
          },
          {
            name: '高级设置',
            items: [
              ...this.basicFormService.getLayoutFormItems(),
              ...this.basicFormService.getPositioningFormItems(),
              ...this.basicFormService.getBackgroundFormItems(),
            ],
          },
        ];
        break;
      case WidgetType.text:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '文字设置',
            items: this.basicFormService.getTextFormItems(),
          }
        ];
        break;
      case WidgetType.link:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '链接设置',
            items: this.basicFormService.getLinkFormItems(),
          }
        ];
        break;
      case WidgetType.image:
        this.formGroups = [
          {
            name: '基本设置',
            items: this.basicFormService.getBasicFormItems(),
          },
          {
            name: '图片设置',
            items: this.basicFormService.getImageFormItems(),
          }
        ];
        break;
      case 'list':
        // TODO
        break;
      case 'table':
        // TODO
        break;
      case 'form':
        // TODO
        break;
      default:
        throw new Error(`unknown type: ${currentType}`);
    }
    // TODO 后续要重构
    const tmp = {};
    this.formGroups.forEach(group => {
      group.items.forEach(item => {
        tmp[item.name] = [null, [Validators.required]];
      });
    });
    this.validateForm = this.formBuilder.group(tmp);
  }

  handleInsertingDataSource() {
    // TODO 待实现
  }

  hideModal() {
    this.visible = false;
  }

  onSubmit() {
    console.log('formData: ', this.validateForm.getRawValue());
    const data = this.basicFormService.convertFormDataToSchema(this.validateForm.getRawValue(), this.currentType);
    console.log('styles: ', data);
    this.hideModal();
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: this.currentType,
        data,
      },
    });
  }
}
