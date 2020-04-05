import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NgZorroAntdModule,
  NzButtonModule,
  NzDrawerModule,
  NzDropDownModule,
  NzStepsModule,
  NzTreeModule,
  NzRadioModule,
} from 'ng-zorro-antd';

import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentTemplateListComponent } from './component-template-list/component-template-list.component';
import { ComponentManagementComponent } from './component-management/component-management.component';
import { InterfaceManagementComponent } from './interface-management/interface-management.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { ComponentCreationComponent } from './component-creation/component-creation.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '@/shared-module/shared-module.module';
import { TextWidgetComponent } from './widget/text-widget/text-widget.component';
import { ContainerWidgetComponent } from './component-creation/components/container-widget/container-widget.component';
import { LinkWidgetComponent } from './component-creation/components/link-widget/link-widget.component';
import { ImageWidgetComponent } from './component-creation/components/image-widget/image-widget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DataDrivenWidgetComponent } from './component-creation/components/data-driven-widget/data-driven-widget.component';
import { TreeNodeWidgetComponent } from './component-creation/components/tree-node-widget/tree-node-widget.component';
import { LogicDrivenWidgetComponent } from './component-creation/components/logic-driven-widget/logic-driven-widget.component';
import DataSource, { APIData, LocalData } from '@/interfaces/data-source';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { InsertCommandComponent } from './component-creation/components/commands/insert-command/insert-command.component';
import { StartCommandComponent } from './component-creation/components/commands/start-command/start-command.component';
import { StyleCommandComponent } from './component-creation/components/commands/style-command/style-command.component';
import { FormComponent } from './component-creation/components/form/form.component';
import { FormItemComponent } from './component-creation/components/form-item/form-item.component';

@NgModule({
  declarations: [
    BuildUpComponent, LayoutComponent, ComponentTemplateListComponent, ComponentManagementComponent,
    InterfaceManagementComponent, AppManagementComponent, ComponentCreationComponent, ComponentListComponent,
    TextWidgetComponent,
    ContainerWidgetComponent,
    LinkWidgetComponent,
    ImageWidgetComponent,
    DataDrivenWidgetComponent,
    TreeNodeWidgetComponent,
    LogicDrivenWidgetComponent,
    InsertCommandComponent,
    StartCommandComponent,
    StyleCommandComponent,
    FormComponent,
    FormItemComponent,
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
    NzDrawerModule,
    DragDropModule,
    NzStepsModule,
    NzRadioModule,
    NgJsonEditorModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LocalData,
      useValue: DataSource.local,
    }, {
      provide: APIData,
      useValue: DataSource.api,
    },
  ],
})
export class BuildUpModule {
}
