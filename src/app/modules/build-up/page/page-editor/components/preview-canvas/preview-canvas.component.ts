import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'seibertron-preview-canvas',
  templateUrl: './preview-canvas.component.html',
  styleUrls: ['./preview-canvas.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCanvasComponent implements OnInit {

  constructor() { }

  droppedList = [];

  ngOnInit(): void {
  }

  onDrop($event: DndDropEvent) {
    const { data } = $event;
    const { content, type } = data;
    console.log('data: ', data);
    this.droppedList.push({content, type});
  }
}
