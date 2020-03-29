import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ICommandPayload from '@/interfaces/command-payload';

@Component({
  selector: 'byp-start-command',
  templateUrl: './start-command.component.html',
  styleUrls: ['./start-command.component.less']
})
export class StartCommandComponent implements OnInit {

  constructor() { }

  @Input()
  selectedKey: string;

  @Output()
  execute: EventEmitter<ICommandPayload> = new EventEmitter<ICommandPayload>();

  ngOnInit() {
  }

}
