import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuildUpComponent} from "./build-up.component";
import {AppManagementComponent} from "./app-management/app-management.component";
import {ComponentManagementComponent} from "./component-management/component-management.component";
import {InterfaceManagementComponent} from "./interface-management/interface-management.component";


const routes: Routes = [{
  path: '',
  component: BuildUpComponent,
  children: [
    {
      path: 'app',
      component: AppManagementComponent,
    },
    {
      path: 'component',
      component: ComponentManagementComponent,
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
