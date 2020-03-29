import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';
import { ContainerFormService } from '@/services/container-form.service';
import { TextFormService } from '@/services/text-form.service';
import { LinkFormService } from '@/services/link-form.service';
import BaseFormItem from '@/models/form/base-form-item';

@Component({
  selector: 'byp-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.less'],
})
export class InsertCommandComponent implements OnInit {

  constructor(
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
      handler: this.handleInserting.bind(this, this, 'link', this.textFormService),
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
    this.formItems = service.getFormItems();
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
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: 'container',
        data: $event,
      },
    });
  }

  hideModal() {
    this.visible = false;
  }
}
