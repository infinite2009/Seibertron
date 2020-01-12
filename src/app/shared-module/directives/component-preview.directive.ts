import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import WidgetSchema from '../../interfaces/widget.schematics';

@Directive({
  selector: '[bypComponentPreview]'
})
export class ComponentPreviewDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input()
  set schema(schema: WidgetSchema) {
    
  }
}
