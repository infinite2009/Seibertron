import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPrototypeDirective } from './directives/component-prototype.directive';
import { withComponentEntries } from '../models/component-prototypes';



@NgModule({
  declarations: [...withComponentEntries(), ComponentPrototypeDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ...withComponentEntries(),
    ComponentPrototypeDirective
  ]
})
export class SharedModuleModule { }
