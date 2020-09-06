import { ComponentWidgetComponent } from '@/modules/shared/component-widget/component-widget.component';
import { ContainerWidgetComponent } from '@/modules/shared/container-widget/container-widget.component';
import { ListWidgetComponent } from '@/modules/shared/list-widget/list-widget.component';
import { TreeWidgetComponent } from '@/modules/shared/tree-widget/tree-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ngx-drag-drop';
import { CollapseComponent } from './collapse/collapse.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { MaterialWrapperComponent } from '@/modules/shared/material-wrapper/material-wrapper.component';
import { DraggableDirective } from './drap-and-drop/draggable.directive';
import { DroppableDirective } from './drap-and-drop/droppable.directive';

@NgModule({
  declarations: [
    CollapseComponent,
    ContainerWidgetComponent,
    TreeWidgetComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MaterialWrapperComponent,
    DraggableDirective,
    DroppableDirective,
  ],
  imports: [CommonModule, NzButtonModule, NzIconModule, DragulaModule, DndModule],
  exports: [
    CollapseComponent,
    ContainerWidgetComponent,
    TreeWidgetComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MaterialWrapperComponent,
    DraggableDirective,
    DroppableDirective,
  ],
})
export class SharedModule {}
