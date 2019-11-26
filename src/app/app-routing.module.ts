import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HowToUseComponent} from "./how-to-use.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'playground',
    loadChildren: () => import('./modules/playground/playground.module').then(m => m.PlaygroundModule)
  },
  {
    // 用 ng 默认的页面作为 not found 页面，展示 ng 的基本用法
    path: '**',
    component: HowToUseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
