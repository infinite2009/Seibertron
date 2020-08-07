import { SharedModule } from '@/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnDiagramsService, ConnectorBridgingService, ConnectorEditingService, DataBindingService,
  DiagramContextMenuService, DiagramModule, LayoutAnimationService, SymbolPaletteModule, SymmetricLayoutService,
  UndoRedoService } from '@syncfusion/ej2-angular-diagrams';
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
  NzTreeSelectModule,
  NzInputModule, NzCascaderModule, NzTableModule, NzDividerModule
} from 'ng-zorro-antd';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import DataSourceType, { APIData, LocalData } from '@/interfaces/data-source-type';
import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentTemplateListComponent } from './component/component-template-list/component-template-list.component';
import { ComponentManagementComponent } from './component/component-management/component-management.component';
import { InterfaceManagementComponent } from './interface-management/interface-management.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { ComponentCreationComponent } from './component/component-creation/component-creation.component';
import { ComponentListComponent } from './component/component-list/component-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InsertCommandComponent } from './component/component-creation/components/commands/insert-command/insert-command.component';
import { StartCommandComponent } from './component/component-creation/components/commands/start-command/start-command.component';
import { StyleCommandComponent } from './component/component-creation/components/commands/style-command/style-command.component';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor';
import { TableComponent } from './component/component-creation/components/table/table.component';
import { TableFormComponent } from './component/component-creation/components/table-form/table-form.component';
import { EventFormComponent } from './component/component-creation/components/event-form/event-form.component';
import BasicFormService from '@/services/forms/basic-form.service';
import { FlowComponentCreatorComponent } from './flow-component-creator/flow-component-creator.component';

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
    InsertCommandComponent,
    StartCommandComponent,
    StyleCommandComponent,
    TableComponent,
    TableFormComponent,
    EventFormComponent,
    FlowComponentCreatorComponent,
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
    NzTreeSelectModule,
    SymbolPaletteModule,
    SharedModule,
    DiagramModule,
    NzTableModule,
    NzDividerModule,
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
    BasicFormService,
    BpmnDiagramsService,
    DataBindingService,
    SymmetricLayoutService,
    ConnectorBridgingService,
    UndoRedoService,
    LayoutAnimationService,
    DiagramContextMenuService,
    ConnectorEditingService,
  ],
})
export class BuildUpModule {
}
