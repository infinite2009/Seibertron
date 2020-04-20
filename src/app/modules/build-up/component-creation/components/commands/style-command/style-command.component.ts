import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ICommandPayload from '@/interfaces/command-payload';

@Component({
  selector: 'seibertron-style-command',
  templateUrl: './style-command.component.html',
  styleUrls: ['./style-command.component.less']
})
export class StyleCommandComponent implements OnInit {

  constructor() { }

  @Input()
  selectedKey: string;

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  ngOnInit() {
  }

}
