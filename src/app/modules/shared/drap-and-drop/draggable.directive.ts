import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import DynamicObject from '@/interfaces/dynamic-object';

@Directive({
  selector: '[seibertronDraggable]',
})
export class DraggableDirective {
  constructor() {}

  @Input()
  dragData: DynamicObject = null;

  @Input()
  dragMode: 'copy' | 'move' = 'move';

  @Output()
  seibertronDragStart: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('draggable')
  get draggable(): boolean {
    return true;
  }

  @HostListener('dragstart', ['$event'])
  onDragStart($event: DragEvent) {
    // TODO need implementation
    const { dataTransfer } = $event;
    dataTransfer.setData('text/seibertronDnd', JSON.stringify(this.dragData || {}));
    console.log('on drag start: ', $event);
  }
}
