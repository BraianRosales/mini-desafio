import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
];

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class FormModule { }
