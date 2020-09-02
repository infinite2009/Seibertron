import { Component, OnInit } from '@angular/core';
import { IOnDropData } from 'ngx-dragdrop';
import DynamicObject from '@/interfaces/dynamic-object';

@Component({
  selector: 'seibertron-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.less'],
})
export class PlaygroundComponent implements OnInit {
  dropVal: IOnDropData;
  JSON = window.JSON;
  list: { name: string }[] = [];
  dropVal2: DynamicObject;

  constructor() {}

  ngOnInit() {}

  onDrop($event: IOnDropData) {
    console.log('$event: ', $event);
    this.list.push($event.dragData);
  }

  onDrop2($event: DynamicObject) {
    this.dropVal2 = $event;
    console.log('droppable succeed');
  }
}
