import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPrototypeDirective } from './directives/component-prototype.directive';
import { withComponentEntries } from '../models/component-prototypes';
import { ComponentPreviewDirective } from './directives/component-preview.directive';



@NgModule({
  declarations: [...withComponentEntries(), ComponentPrototypeDirective, ComponentPreviewDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ...withComponentEntries(),
    ComponentPrototypeDirective
  ]
})
export class SharedModuleModule { }
