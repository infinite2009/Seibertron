import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import DynamicObject from '@/interfaces/dynamic-object';

@Directive({
  selector: '[seibertronDroppable]',
})
export class DroppableDirective {
  constructor() {}

  @Output()
  seibertronDropEnd: EventEmitter<DynamicObject> = new EventEmitter<DynamicObject>();

  @Output()
  seibertronBeforeDrop: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('dragover', ['$event'])
  onDragover($event: DragEvent) {
    // TODO need implementation
    this.seibertronBeforeDrop.emit();
    const { dataTransfer } = $event;
    dataTransfer.dropEffect = 'copy';
    $event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter($event: DragEvent) {
    // TODO need implementation
    console.log('on drag enter: ', $event);
    $event.preventDefault();
  }

  // @HostListener('dragleave', ['$event'])
  // onDragLeave($event: DragEvent) {
  //   console.log('on drag leave: ', $event);
  // }

  @HostListener('drop', ['$event'])
  onDropEnd($event: DragEvent) {
    console.log('on drop end: ', $event);
    const { dataTransfer } = $event;
    this.seibertronDropEnd.emit(JSON.parse(dataTransfer.getData('text/seibertronDnd')));
    $event.preventDefault();
  }
}
