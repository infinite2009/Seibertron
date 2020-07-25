import { ComponentCreationComponent } from '@/modules/build-up/component/component-creation/component-creation.component';
import { ComponentEditorComponent } from '@/modules/build-up/component/component-editor/component-editor.component';
import { ComponentListComponent } from '@/modules/build-up/component/component-list/component-list.component';
import { FlowComponentCreatorComponent } from '@/modules/build-up/flow-component-creator/flow-component-creator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentComponent } from './component.component';

const routes: Routes = [{
  path: '', component: ComponentComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'create',
      component: ComponentCreationComponent,
    },
    {
      path: 'create-flow',
      component: FlowComponentCreatorComponent,
    },
    {
      path: 'edit/:id',
      component: ComponentEditorComponent,
    },
    {
      path: 'edit',
      component: ComponentEditorComponent,
    },
    {
      path: 'list',
      component: ComponentListComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
