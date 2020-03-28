import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import ICommandPayload from '@/interfaces/command-payload';
import CommandType from '@/enum/command-type';

@Component({
  selector: 'byp-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.less'],
})
export class InsertCommandComponent implements OnInit {

  constructor() {
  }

  visible: boolean = false;

  currentCommand: string = null;

  commands: any[] = [
    {
      name: '容器',
      type: 'container',
      handler: this.handleInsertingContainer,
    },
    {
      name: '链接',
      type: 'link',
      handler: this.handleInsertingLink,
    },
    {
      name: '文本',
      type: 'text',
      handler: this.handleInsertingText,
    },
    {
      name: '列表',
      type: 'list',
      handler: this.handleInsertingList,
    },
    {
      name: '表格',
      type: 'table',
      handler: this.handleInsertingTable,
    },
    {
      name: '图片',
      type: 'image',
      handler: this.handleInsertingImage,
    }
  ];

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  ngOnInit() {
  }

  /* event handlers */
  handleInsertingList() {
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: 'list',
        data: {}
      },
    });
  }

  handleInsertingText() {
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: 'text',
        data: {},
      },
    });
  }

  handleInsertingTable() {
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: 'table',
        data: {}
      },
    });
  }

  handleInsertingContainer() {
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: 'container',
        data: {},
      },
    });
  }

  handleInsertingLink() {
    this.execute.emit({
      type: CommandType.insert,
      payload: {
        type: 'link',
        data: {},
      },
    });
  }

  handleInsertingImage() {

  }
}
