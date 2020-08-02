import { CdkDragStart } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'seibertron-widget-material',
  templateUrl: './widget-material.component.html',
  styleUrls: ['./widget-material.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetMaterialComponent implements OnInit {
  constructor() {}

  list = [
    {
      content: 'testData1',
      effectAllowed: 'copy',
      type: 'text',
    },
    {
      content: 'testData2',
      effectAllowed: 'copy',
      type: 'button',
    },
    {
      content: 'testData3',
      effectAllowed: 'copy',
      type: 'image',
    },
    {
      content: 'testData4',
      effectAllowed: 'copy',
      type: 'list',
    },
    {
      content: 'testData5',
      effectAllowed: 'copy',
      type: 'table',
    },
  ];

  droppedList = [];

  draggedData: CdkDragStart;

  draggedDataIndex: number;

  ngOnInit(): void {}

  onDrop($event: DndDropEvent) {
    const { data } = $event;
    const { content, type } = data;
    console.log('data: ', data);
    this.droppedList.push({content, type});
  }
}
