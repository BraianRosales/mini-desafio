import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //Flag que renderiza la data enviada del lado de template
  dataSent: boolean = false;
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    /* Construir el FormGroup(productForm), se usa el FormBuilder para facilitar la construccion del formulario(setear valores y validadores) */
    this.productForm = this.formBuilder.group({
      name: [ '', [Validators.required] ],
      description: [ '', [Validators.required] ],
      type: ['', [Validators.required] ]
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.dataSent = true
  }
  
  get name() {
    return this.productForm.get('name')?.value;
  }

  get description() {
    return this.productForm.get('description')?.value;
  }

  get type() {
    return this.productForm.get('type')?.value;
  }

}
