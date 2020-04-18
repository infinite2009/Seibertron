import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import WidgetSchema from '@/interfaces/schema/widget.schema';

@Directive({
  selector: '[bypTree]'
})
export class TreeDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  schema: WidgetSchema;

  @Input()
  set bypTree(schema: WidgetSchema) {
    this.viewContainerRef.clear();
    this.schema = schema;
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
