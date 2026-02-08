import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-tarea',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './registrar-tarea.html',
  styleUrl: './registrar-tarea.css'
})
export class RegistrarTarea {

  Tareas:any[] = [];

}
