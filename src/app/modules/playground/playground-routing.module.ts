import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaygroundComponent} from "./playground.component";


const routes: Routes = [
  {
    // 这里不可以写斜杠，会导致无法载入组件，而且不会报错
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
