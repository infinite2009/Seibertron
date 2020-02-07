import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPrototypeDirective } from './directives/component-prototype.directive';
import { withComponentEntries } from '../models/component-prototypes';
import { ComponentPreviewDirective } from './directives/component-preview.directive';
import { WidgetComponent } from './widget/widget.component';
import { TestDiService } from './service/test-di.service';



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
  providers: [
    TestDiService,
  ]
})
export class SharedModuleModule { }
