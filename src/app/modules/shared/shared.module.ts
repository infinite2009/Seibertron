import { ComponentWidgetComponent } from '@/modules/shared/component-widget/component-widget.component';
import { ContainerWidgetComponent } from '@/modules/shared/container-widget/container-widget.component';
import { ListWidgetComponent } from '@/modules/shared/list-widget/list-widget.component';
import { TreeWidgetComponent } from '@/modules/shared/tree-widget/tree-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse/collapse.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { MaterialWrapperComponent } from '@/modules/shared/material-wrapper/material-wrapper.component';

@NgModule({
  declarations: [
    CollapseComponent,
    ContainerWidgetComponent,
    TreeWidgetComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MaterialWrapperComponent,
  ],
  imports: [CommonModule, NzButtonModule, NzIconModule],
  exports: [
    CollapseComponent,
    ContainerWidgetComponent,
    TreeWidgetComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MaterialWrapperComponent,
  ],
})
export class SharedModule {}
