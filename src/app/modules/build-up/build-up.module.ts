import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  declarations: [BuildUpComponent, LayoutComponent],
  imports: [
    CommonModule,
    BuildUpRoutingModule,
    NgZorroAntdModule,
  ]
})
export class BuildUpModule { }
