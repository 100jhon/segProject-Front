import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ActividadService } from "../services/actividad/actividad.service";
import { OnInit } from "@angular/core";

@Component({
    selector:'app-actividad-component',
     imports: [FormsModule,CommonModule],
    templateUrl: './actividad.component.html',
    styleUrls: ['./actividad.component.css']
})


export class Actividades implements OnInit{

  actividades: any[] = [];

  constructor(private actividadService: ActividadService) {}

  ngOnInit(): void {
    this.obtenerActividades();
  }

  obtenerActividades() {
    this.actividadService.obtenerActividades().subscribe({
      next: (actividades) => {
        this.actividades = actividades;
      },
      error: (err) => {
        console.error('Error al obtener proyectos', err);
      }
    });
  }

}