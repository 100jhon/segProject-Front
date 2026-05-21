import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { TareaService } from '../services/tarea/tarea.service';


@Component({
  selector: 'app-registrar-tarea',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './registrar-tarea.html',
  styleUrl: './registrar-tarea.css'
})
export class RegistrarTarea implements OnInit {

  tareas: any[] = [];

  constructor(private tareaService: TareaService) {}

    ngOnInit(): void {
    this.obtenerTareas();
  }

    obtenerTareas() {
    this.tareaService.obtenerTareas().subscribe({
      next: (tareas) => {
        this.tareas = tareas;
      },
      error: (err) => {
        console.error('Error al obtener proyectos', err);
      }
    });
  }

}
