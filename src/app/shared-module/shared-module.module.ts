import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPrototypeDirective } from './directives/component-prototype.directive';
import { withComponentEntries } from '../models/component-prototypes';
import { ComponentPreviewDirective } from './directives/component-preview.directive';
import { WidgetComponent } from './widget/widget.component';



@NgModule({
  declarations: [...withComponentEntries(), ComponentPrototypeDirective, ComponentPreviewDirective, WidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...withComponentEntries(),
    ComponentPrototypeDirective,
    ComponentPreviewDirective,
    WidgetComponent,
  ],
})
export class SharedModuleModule { }
