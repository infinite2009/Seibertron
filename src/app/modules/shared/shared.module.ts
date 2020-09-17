import { ComponentWidgetComponent } from '@/modules/shared/component-widget/component-widget.component';
import { ContainerWidgetComponent } from '@/modules/shared/container-widget/container-widget.component';
import { ListWidgetComponent } from '@/modules/shared/list-widget/list-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ngx-drag-drop';
import { CollapseComponent } from './collapse/collapse.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { MaterialWrapperComponent } from '@/modules/shared/material-wrapper/material-wrapper.component';
import { DraggableDirective } from './drap-and-drop/draggable.directive';
import { DroppableDirective } from './drap-and-drop/droppable.directive';

@NgModule({
  declarations: [
    CollapseComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MaterialWrapperComponent,
    DraggableDirective,
    DroppableDirective,
    ContainerWidgetComponent,
  ],
  imports: [CommonModule, NzButtonModule, NzIconModule, DndModule],
  exports: [
    CollapseComponent,
    ContainerWidgetComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MaterialWrapperComponent,
    DraggableDirective,
    DroppableDirective,
  ],
})
export class SharedModule {}
