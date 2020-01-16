import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bypComponentPrototype]'
})
export class ComponentPrototypeDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
