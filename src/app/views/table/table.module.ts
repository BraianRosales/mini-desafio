import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
];


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class TableModule { }
