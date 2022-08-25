import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces';

const ELEMENT_DATA: Persona[] = [
  {
    nombre: 'Pedro',
    edad: 20,
    carrera: 'Ingeniería',
    hobbie: 'Futbol',
  },
  {
    nombre: 'Rodrigo',
    edad: 22,
    carrera: 'Arquitectura',
    hobbie: 'Bajo eléctrico',
  },
  {
    nombre: 'Romina',
    edad: 21,
    carrera: 'Abogacía',
    hobbie: 'Acrobacia',
  },
  {
    nombre: 'Ana',
    edad: 23,
    carrera: 'Contadora',
    hobbie: 'Astronomía',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // Vincula las prodiedades del array con las propiedades matColumnDef de la table del lado del template.
  displayedColumns: string[] = ['name', 'age', 'career', 'hobbie'];
  // Agrega los datos a table del lado del template, [dataSource]="dataSource".
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
