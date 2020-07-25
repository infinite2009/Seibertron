import { FlowComponentCreatorComponent } from '@/modules/build-up/flow-component-creator/flow-component-creator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildUpComponent } from './build-up.component';
import { AppManagementComponent } from './app-management/app-management.component';
import { ComponentManagementComponent } from './component/component-management/component-management.component';
import { InterfaceManagementComponent } from './interface-management/interface-management.component';
import { ComponentCreationComponent } from './component/component-creation/component-creation.component';
import { ComponentListComponent } from './component/component-list/component-list.component';


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
      loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    },
    {
      path: 'component',
      loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
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
