import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse/collapse.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [CollapseComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
  ],
  exports: [
    CollapseComponent,
  ]
})
export class SharedModule { }
