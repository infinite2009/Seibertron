import { ActionMaterialComponent } from '@/modules/build-up/page/page-editor/components/action-material/action-material.component';
import { HttpInterfaceMaterialComponent } from '@/modules/build-up/page/page-editor/components/http-interface-material/http-interface-material.component';
import { ToolbarComponent } from '@/modules/build-up/page/page-editor/components/toolbar/toolbar.component';
import { WidgetMaterialComponent } from '@/modules/build-up/page/page-editor/components/widget-material/widget-material.component';
import { PageEditorComponent } from '@/modules/build-up/page/page-editor/page-editor.component';
import { PageListComponent } from '@/modules/build-up/page/page-list/page-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule, NzDividerModule, NzIconModule, NzSwitchModule, NzTableModule, NzWaveModule } from 'ng-zorro-antd';
import { DndModule } from 'ngx-drag-drop';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PreviewCanvasComponent } from './page-editor/components/preview-canvas/preview-canvas.component';
import { StyleEditorComponent } from './page-editor/components/style-editor/style-editor.component';
import { StateEditorComponent } from './page-editor/components/state-editor/state-editor.component';
import { ActionEditorComponent } from './page-editor/components/action-editor/action-editor.component';
import { HttpInterfaceEditorComponent } from './page-editor/components/http-interface-editor/http-interface-editor.component';
import { LogicEditorComponent } from './page-editor/components/logic-editor/logic-editor.component';
import { SharedModule } from '@/modules/shared/shared.module';


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
    StyleEditorComponent,
    StateEditorComponent,
    ActionEditorComponent,
    HttpInterfaceEditorComponent,
    LogicEditorComponent,
  ],
  imports: [
    NzTableModule,
    NzDividerModule,
    CommonModule,
    PageRoutingModule,
    NzWaveModule,
    NzButtonModule,
    NzIconModule,
    SharedModule,
    NzSwitchModule,
    FormsModule,
    DragDropModule,
    DndModule
  ]
})
export class PageModule { }
