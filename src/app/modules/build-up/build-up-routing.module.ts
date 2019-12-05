import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuildUpComponent} from "./build-up.component";


const routes: Routes = [{
  path: '',
  component: BuildUpComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildUpRoutingModule { }
