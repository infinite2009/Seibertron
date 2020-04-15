import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { BasicFormService } from '@/services/forms/basic-form.service';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';
import WidgetType from '@/enum/schema/widget-type.enum';

@Component({
  selector: 'byp-insert-command',
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
  ];

  @Input()
  selectedKey: string;

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  ngOnInit() {
    this.validateForm = this.formBuilder.group({});
  }

  convertFormData(formData: any) {
    const {
      title,
      desc,
      text,
      fontSize,
      fontWeight,
      lineHeight,
      ellipsis,
    } = formData;
    const result = {
      title,
      desc,
      text,
      style: {
        'font-size': fontSize,
        'font-weight': fontWeight ? 500 : 400,
        'line-height': lineHeight,
      } as any,
    };
    if (+ellipsis === 1) {
      result.style = {
        ...result.style,
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      };
    } else if (+ellipsis > 1) {
      result.style = {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': +ellipsis,
        '-webkit-box-orient': 'vertical',
      };
    }
    return result;
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
            items: this.basicFormService.getBorderFormItems(),
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
            name: '更多',
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

  hideModal() {
    this.visible = false;
  }

  onSubmit() {
    const data = this.basicFormService.convertFormDataToSchema(this.validateForm.getRawValue(), this.currentType);
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
