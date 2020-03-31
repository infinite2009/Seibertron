import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { ContainerFormService } from '@/services/container-form.service';
import { TextFormService } from '@/services/text-form.service';
import { LinkFormService } from '@/services/link-form.service';
import BaseFormItem from '@/models/form/base-form-item';
import { BaseFormService } from '@/services/base-form.service';

@Component({
  selector: 'byp-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.less'],
})
export class InsertCommandComponent implements OnInit {

  constructor(
    private baseFormService: BaseFormService,
    private containerFormService: ContainerFormService,
    private textFormService: TextFormService,
    private linkFormService: LinkFormService,
  ) {
  }

  formItems: BaseFormItem<any>[] = [];

  visible: boolean = false;

  currentType: string = null;

  commands: any[] = [
    {
      name: '容器',
      type: 'container',
      handler: this.handleInserting.bind(this, this, 'container', this.containerFormService),
    },
    {
      name: '文本',
      type: 'text',
      handler: this.handleInserting.bind(this, this, 'text', this.textFormService),
    },
    {
      name: '链接',
      type: 'link',
      handler: this.handleInserting.bind(this, this, 'link', this.linkFormService),
    },
    {
      name: '列表',
      type: 'list',
      handler: this.handleInsertingList.bind(this),
    },
    {
      name: '表格',
      type: 'table',
      handler: this.handleInsertingTable.bind(this),
    },
    {
      name: '图片',
      type: 'image',
      handler: this.handleInsertingImage.bind(this),
    },
    {
      name: '表单',
      type: 'form',
      handler: this.handleInsertingForm.bind(this),
    }
  ];

  @Input()
  selectedKey: string;

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  ngOnInit() {
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
        overflow : 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': +ellipsis,
        '-webkit-box-orient': 'vertical'
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

  handleInserting(thisArg, currentType, service) {
    this.visible = true;
    this.currentType = currentType;
    this.formItems = this.baseFormService.getFormItems('容器').concat(service.getFormItems());
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
}
