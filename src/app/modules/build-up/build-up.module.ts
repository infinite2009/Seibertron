import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgZorroAntdModule, NzDropDownModule, NzTreeModule } from 'ng-zorro-antd';

import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentTemplateListComponent } from './component-template-list/component-template-list.component';
import { ComponentManagementComponent } from './component-management/component-management.component';
import { InterfaceManagementComponent } from './interface-management/interface-management.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { ComponentCreationComponent } from './component-creation/component-creation.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '@/shared-module/shared-module.module';
import { withComponentEntries } from '@/models/component-prototypes';
import { TextWidgetComponent } from './widget/text-widget/text-widget.component';
import { ContainerWidgetComponent } from './component-creation/components/container-widget/container-widget.component';
import { LinkWidgetComponent } from './component-creation/components/link-widget/link-widget.component';
import { ImageWidgetComponent } from './component-creation/components/image-widget/image-widget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComputedWidgetComponent } from './component-creation/components/computed-widget/computed-widget.component';
import { TreeNodeWidgetComponent } from './component-creation/components/tree-node-widget/tree-node-widget.component';

@NgModule({
  declarations: [BuildUpComponent, LayoutComponent, ComponentTemplateListComponent, ComponentManagementComponent,
    InterfaceManagementComponent, AppManagementComponent, ComponentCreationComponent, ComponentListComponent,
    TextWidgetComponent,
    ContainerWidgetComponent,
    LinkWidgetComponent,
    ImageWidgetComponent,
    ComputedWidgetComponent,
    TreeNodeWidgetComponent,
    ],
  imports: [
    CommonModule,
    BuildUpRoutingModule,
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    SharedModuleModule,
    NzTreeModule,
    NzDropDownModule,
    DragDropModule,
  ],
  entryComponents: withComponentEntries(),
})
export class BuildUpModule { }
