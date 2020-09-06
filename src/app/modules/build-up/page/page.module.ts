import { ActionMaterialComponent } from '@/modules/build-up/page/page-editor/components/action-material/action-material.component';
import { HttpInterfaceMaterialComponent } from '@/modules/build-up/page/page-editor/components/http-interface-material/http-interface-material.component';
import { ToolbarComponent } from '@/modules/build-up/page/page-editor/components/toolbar/toolbar.component';
import { WidgetMaterialComponent } from '@/modules/build-up/page/page-editor/components/widget-material/widget-material.component';
import { PageEditorComponent } from '@/modules/build-up/page/page-editor/page-editor.component';
import { PageListComponent } from '@/modules/build-up/page/page-list/page-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NzButtonModule,
  NzDividerModule,
  NzIconModule,
  NzSwitchModule,
  NzTableModule,
  NzWaveModule,
} from 'ng-zorro-antd';
import { DragulaModule, DragulaService } from 'ng2-dragula';
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
import { BuildUpModule } from '@/modules/build-up/build-up.module';
import { StateBarComponent } from './page-editor/components/state-bar/state-bar.component';
import BasicFormService from '@/services/forms/basic-form.service';
import { OperationMaskComponent } from './page-editor/components/operation-mask/operation-mask.component';

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
    StateBarComponent,
    OperationMaskComponent,
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
    BuildUpModule,
    DragulaModule,
    DndModule,
  ],
  providers: [BasicFormService, DragulaService],
})
export class PageModule {}
