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

import DataSourceType, { APIData, LocalData } from '@/interfaces/data-source-type';
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
import { ContainerWidgetComponent } from './component-creation/components/container-widget/container-widget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeWidgetComponent } from './component-creation/components/tree-widget/tree-widget.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { InsertCommandComponent } from './component-creation/components/commands/insert-command/insert-command.component';
import { StartCommandComponent } from './component-creation/components/commands/start-command/start-command.component';
import { StyleCommandComponent } from './component-creation/components/commands/style-command/style-command.component';
import { TextWidgetComponent } from '@/modules/build-up/component-creation/components/text-widget/text-widget.component';
import { LinkWidgetComponent } from '@/modules/build-up/component-creation/components/link-widget/link-widget.component';
import { ImageWidgetComponent } from '@/modules/build-up/component-creation/components/image-widget/image-widget.component';
import { ComponentWidgetComponent } from './component-creation/components/component-widget/component-widget.component';
import { ListWidgetComponent } from './component-creation/components/list-widget/list-widget.component';
import { MatrixWidgetComponent } from './component-creation/components/matrix-widget/matrix-widget.component';
import { FormComponent } from './component-creation/components/form/form.component';

@NgModule({
  declarations: [
    AppManagementComponent,
    BuildUpComponent,
    ComponentCreationComponent,
    ComponentTemplateListComponent,
    ComponentManagementComponent,
    ComponentListComponent,
    InterfaceManagementComponent,
    LayoutComponent,
    TextWidgetComponent,
    ContainerWidgetComponent,
    LinkWidgetComponent,
    ImageWidgetComponent,
    TreeWidgetComponent,
    InsertCommandComponent,
    StartCommandComponent,
    StyleCommandComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    MatrixWidgetComponent,
    FormComponent,
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
      useValue: DataSourceType.local,
    }, {
      provide: APIData,
      useValue: DataSourceType.api,
    },
  ],
})
export class BuildUpModule {
}
