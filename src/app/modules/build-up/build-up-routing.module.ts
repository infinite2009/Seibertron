import { FlowComponentCreatorComponent } from '@/modules/build-up/flow-component-creator/flow-component-creator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildUpComponent } from './build-up.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { ComponentManagementComponent } from './component-management/component-management.component';
import { InterfaceManagementComponent } from './interface-management/interface-management.component';
import { ComponentCreationComponent } from './component-creation/component-creation.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { PageManagementComponent } from '@/modules/build-up/page-management/page-management.component';
import { PageListComponent } from '@/modules/build-up/page-management/page-list/page-list.component';
import { PageEditorComponent } from '@/modules/build-up/page-management/page-editor/page-editor.component';


const routes: Routes = [{
  path: '',
  component: BuildUpComponent,
  children: [
    {
      path: 'app',
      component: AppManagementComponent,
    },
    {
      path: 'page',
      component: PageManagementComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full',
        },
        {
          path: 'list',
          component: PageListComponent,
        },
        {
          path: 'edit',
          component: PageEditorComponent,
        }
      ]
    },
    {
      path: 'component',
      component: ComponentManagementComponent,
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
          path: 'list',
          component: ComponentListComponent,
        }
      ],
    },
    {
      path: 'interface',
      component: InterfaceManagementComponent,
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'app'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildUpRoutingModule { }
