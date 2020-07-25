import { PageEditorComponent } from '@/modules/build-up/page/page-editor/page-editor.component';
import { PageListComponent } from '@/modules/build-up/page/page-list/page-list.component';
import { PageComponent } from '@/modules/build-up/page/page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
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
        path: 'edit/:id',
        component: PageEditorComponent,
      },
      {
        path: 'edit',
        component: PageEditorComponent,
      }
    ]
  },
  {
    path: 'list',
    component: PageListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
