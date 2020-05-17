import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
    NzButtonModule,
    NzFormModule,
    NzDrawerModule,
    NzDropDownModule,
    NzStepsModule,
    NzTreeModule,
    NzRadioModule,
    NzModalModule,
    NzSelectModule,
    NzTabsModule,
    NzMessageModule,
    NzLayoutModule,
    NzInputModule, NzCascaderModule, NgZorroAntdModule,
} from 'ng-zorro-antd';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

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
import { ContainerWidgetComponent } from './component-creation/components/container-widget/container-widget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeWidgetComponent } from './component-creation/components/tree-widget/tree-widget.component';
import { InsertCommandComponent } from './component-creation/components/commands/insert-command/insert-command.component';
import { StartCommandComponent } from './component-creation/components/commands/start-command/start-command.component';
import { StyleCommandComponent } from './component-creation/components/commands/style-command/style-command.component';
import { ComponentWidgetComponent } from './component-creation/components/component-widget/component-widget.component';
import { ListWidgetComponent } from './component-creation/components/list-widget/list-widget.component';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor';
import { TableComponent } from './component-creation/components/table/table.component';
import { TableFormComponent } from './component-creation/components/table-form/table-form.component';
import { EventFormComponent } from './component-creation/components/event-form/event-form.component';

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
    ContainerWidgetComponent,
    TreeWidgetComponent,
    InsertCommandComponent,
    StartCommandComponent,
    StyleCommandComponent,
    ComponentWidgetComponent,
    ListWidgetComponent,
    TableComponent,
    TableFormComponent,
    EventFormComponent,
  ],
    imports: [
        NzInputModule,
        CommonModule,
        BuildUpRoutingModule,
        NzIconModule,
        FormsModule,
        NzCheckboxModule,
        NzTreeModule,
        NzDropDownModule,
        NzDrawerModule,
        NzFormModule,
        DragDropModule,
        NzStepsModule,
        NzRadioModule,
        NzButtonModule,
        ReactiveFormsModule,
        MonacoEditorModule,
        NzMessageModule,
        NzModalModule,
        NzSelectModule,
        NzTabsModule,
        NzLayoutModule,
        NzCascaderModule,
        NgZorroAntdModule,
    ],
  providers: [
    {
      provide: LocalData,
      useValue: DataSourceType.local,
    },
    {
      provide: APIData,
      useValue: DataSourceType.api,
    },
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        baseUrl: './assets', // configure base path for monaco editor default: './assets'
        defaultOptions: {
          scrollBeyondLastLine: false,
          // automaticLayout: true,
        }, // pass default options to be used
      },
    },
  ],
})
export class BuildUpModule {}
