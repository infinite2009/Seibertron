import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { ComponentTemplateListComponent } from './component-template-list/component-template-list.component';


@NgModule({
  declarations: [BuildUpComponent, LayoutComponent, ComponentTemplateListComponent],
  imports: [
    CommonModule,
    BuildUpRoutingModule,
    NgZorroAntdModule,
  ]
})
export class BuildUpModule { }
