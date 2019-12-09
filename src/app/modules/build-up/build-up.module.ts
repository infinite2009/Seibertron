import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { ComponentTemplateListComponent } from './component-template-list/component-template-list.component';
import { ComponentManagementComponent } from './component-management/component-management.component';
import { InterfaceManagementComponent } from './interface-management/interface-management.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { ComponentCreationComponent } from './component-creation/component-creation.component';
import { ComponentListComponent } from './component-list/component-list.component';


@NgModule({
  declarations: [BuildUpComponent, LayoutComponent, ComponentTemplateListComponent, ComponentManagementComponent, InterfaceManagementComponent, AppManagementComponent, ComponentCreationComponent, ComponentListComponent],
  imports: [
    CommonModule,
    BuildUpRoutingModule,
    NgZorroAntdModule,
  ]
})
export class BuildUpModule { }
