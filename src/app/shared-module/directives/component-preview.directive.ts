import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import WidgetSchema from '../../interfaces/widget.schematics';

@Directive({
  selector: '[bypComponentPreview]'
})
export class ComponentPreviewDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    console.log('templateRef: ', templateRef);
    console.log('viewContainer: ', viewContainer);
  }

  @Input()
  set bypComponentPreview(schema: WidgetSchema) {
    console.log('schema input: ', schema);
  }
}
