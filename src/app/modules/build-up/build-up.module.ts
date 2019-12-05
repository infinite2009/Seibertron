import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildUpRoutingModule } from './build-up-routing.module';
import { BuildUpComponent } from './build-up.component';
import { LayoutComponent } from './layout/layout.component';
import {NzLayoutModule} from "ng-zorro-antd";


@NgModule({
  declarations: [BuildUpComponent, LayoutComponent],
  imports: [
    CommonModule,
    BuildUpRoutingModule,
    NzLayoutModule
  ]
})
export class BuildUpModule { }
