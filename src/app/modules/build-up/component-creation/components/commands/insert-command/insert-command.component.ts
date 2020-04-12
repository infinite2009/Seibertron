import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { BasicFormService } from '@/services/forms/basic-form.service';
import FormItem from '@/models/form/form-item';
import StyleFormItem from '@/models/form/style-form-item';

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

  currentType: string = null;

  commands: any[] = [
    {
      name: '容器',
      type: 'container',
      handler: this.handleInserting.bind(this, this, 'container'),
    },
    {
      name: '文本',
      type: 'text',
      handler: this.handleInserting.bind(this, this, 'text'),
    },
    {
      name: '链接',
      type: 'link',
      handler: this.handleInserting.bind(this, this, 'link'),
    },
    {
      name: '列表',
      type: 'list',
      handler: this.handleInsertingList.bind(this, this, 'list'),
    },
    {
      name: '表格',
      type: 'table',
      handler: this.handleInsertingTable.bind(this, this, 'table'),
    },
    {
      name: '图片',
      type: 'image',
      handler: this.handleInsertingImage.bind(this, this, 'image'),
    },
    {
      name: '表单',
      type: 'form',
      handler: this.handleInsertingForm.bind(this, this, 'form'),
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
  handleInsertingList() {
    // this.execute.emit({
    //   type: CommandType.insert,
    //   payload: {
    //     type: 'list',
    //     data: {}
    //   },
    // });
  }

  handleInsertingText() {
    this.visible = true;
    this.currentType = 'text';
    // this.execute.emit({
    //   type: CommandType.insert,
    //   payload: {
    //     type: 'text',
    //     data: {},
    //   },
    // });
  }

  handleInsertingTable() {
    // this.execute.emit({
    //   type: CommandType.insert,
    //   payload: {
    //     type: 'table',
    //     data: {}
    //   },
    // });
  }

  handleInserting(thisArg, currentType) {
    this.visible = true;
    this.currentType = currentType;
    switch (currentType) {
      case 'container':
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
              ...this.basicFormService.getPositioningFormItems()
            ],
          },
        ];
        break;
      case 'text':
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
      case 'link':
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
      case 'image':
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

  handleInsertingLink() {
    // this.execute.emit({
    //   type: CommandType.insert,
    //   payload: {
    //     type: 'link',
    //     data: {},
    //   },
    // });
  }

  handleInsertingImage() {

  }

  handleInsertingForm() {

  }

  handleSaveFormData($event) {
    const data = this.convertFormData($event);
    this.hideModal();
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: this.currentType,
        data,
      },
    });
  }

  hideModal() {
    this.visible = false;
  }

  onSubmit($event) {
    console.log(this.validateForm.getRawValue());
    const data = this.convertFormData($event);
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
