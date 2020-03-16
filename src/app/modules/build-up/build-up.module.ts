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

@NgModule({
  declarations: [BuildUpComponent, LayoutComponent, ComponentTemplateListComponent, ComponentManagementComponent,
    InterfaceManagementComponent, AppManagementComponent, ComponentCreationComponent, ComponentListComponent,
    TextWidgetComponent],
  imports: [
    CommonModule,
    BuildUpRoutingModule,
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    SharedModuleModule,
    NzTreeModule,
    NzDropDownModule,
  ],
  entryComponents: withComponentEntries(),
})
export class BuildUpModule { }
