import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HowToUseComponent} from './how-to-use/how-to-use.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'build-up',
    loadChildren: () => import('./modules/build-up/build-up.module').then(m => m.BuildUpModule)
  },
  {
    path: 'playground',
    loadChildren: () => import('./modules/playground/playground.module').then(m => m.PlaygroundModule)
  },
  {
    path: 'how-to-use',
    component: HowToUseComponent
  },
  {
    // 用 ng 默认的页面作为 not found 页面，展示 ng 的基本用法
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
