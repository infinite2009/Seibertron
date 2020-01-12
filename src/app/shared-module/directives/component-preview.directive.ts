import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import WidgetSchema from '../../interfaces/widget.schematics';

@Directive({
  selector: '[bypComponentPreview]'
})
export class ComponentPreviewDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input()
  set schema(schema: WidgetSchema) {

  }

  ngOnInit(): void {
    console.log('component preview directive initialized');
  }
}
