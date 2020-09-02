import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { NgxDragDropModule } from 'ngx-dragdrop';
import { SharedModule } from '@/modules/shared/shared.module';

@NgModule({
  // 不需要把模块的根组件声明为 entryComponent
  declarations: [PlaygroundComponent],
  imports: [CommonModule, PlaygroundRoutingModule, NgxDragDropModule, SharedModule],
})
export class PlaygroundModule {}
