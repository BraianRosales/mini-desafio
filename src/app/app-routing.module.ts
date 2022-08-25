import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  {
    path: 'table',
    loadChildren: () => import('./views/table/table.module').then(m => m.TableModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./views/form/form.module').then(m => m.FormModule)
  }
]


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
