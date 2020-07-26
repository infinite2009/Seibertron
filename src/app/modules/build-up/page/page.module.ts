import { ActionMaterialComponent } from '@/modules/build-up/page/page-editor/components/action-material/action-material.component';
import { HttpInterfaceMaterialComponent } from '@/modules/build-up/page/page-editor/components/http-interface-material/http-interface-material.component';
import { ToolbarComponent } from '@/modules/build-up/page/page-editor/components/toolbar/toolbar.component';
import { WidgetMaterialComponent } from '@/modules/build-up/page/page-editor/components/widget-material/widget-material.component';
import { PageEditorComponent } from '@/modules/build-up/page/page-editor/page-editor.component';
import { PageListComponent } from '@/modules/build-up/page/page-list/page-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzDividerModule, NzIconModule, NzTableModule, NzWaveModule } from 'ng-zorro-antd';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PreviewCanvasComponent } from './page-editor/components/preview-canvas/preview-canvas.component';


@NgModule({
  declarations: [
    PageComponent,
    PageEditorComponent,
    PageListComponent,
    ToolbarComponent,
    WidgetMaterialComponent,
    HttpInterfaceMaterialComponent,
    ActionMaterialComponent,
    PreviewCanvasComponent,
  ],
  imports: [
    NzTableModule,
    NzDividerModule,
    CommonModule,
    PageRoutingModule,
    NzWaveModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class PageModule { }
