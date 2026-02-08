import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProyectoService } from "../services/proyectos/proyecto.service";
import { FormsModule } from "@angular/forms";
import { FormularioProyectoComponent } from "../formularios/proyecto/proyecto.forms";


@Component({
selector: 'app-proyecto-component',
imports: [CommonModule,FormsModule,FormularioProyectoComponent],
templateUrl:'./proyecto.component.html',
styleUrls: ['./proyecto.component.css']
})


export class Proyecto implements OnInit{

    proyectos: any[] = [];
    mostrarFormulario = false;
    proyectoEditar: any | null = null; // <-- nuevo: proyecto a editar

    constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.proyectoService.obtenerProyectos().subscribe({
      next: (data) => {
        this.proyectos = data;
      },
      error: (err) => {
        console.error('Error al obtener proyectos', err);
      }
    });
  }

    abrirFormularioCrear() {
    this.proyectoEditar = null;   // 🔹 modo crear
    this.mostrarFormulario = true;
  }

  abrirFormularioEditar()  {
  const seleccionado = this.proyectos.find(p => p.seleccionado);
  if (seleccionado) {
    this.proyectoEditar = seleccionado;
    this.mostrarFormulario = true;
  } else {
    alert('Selecciona un proyecto primero');
  }
}


eliminarSeleccionados() {
  // Filtrar proyectos seleccionados
  const idsSeleccionados = this.proyectos
    .filter(proyecto => proyecto.seleccionado)
    .map(proyecto => proyecto.idProyecto);

  if (idsSeleccionados.length === 0) {
    alert('Selecciona al menos un proyecto para eliminar');
    return;
  }

  // Confirmación (opcional con SweetAlert2 o simple)
  if (!confirm(`¿Seguro que deseas eliminar ${idsSeleccionados.length} proyectos?`)) {
    return;
  }

  this.proyectoService.eliminarProyectos(idsSeleccionados).subscribe({
    next: (response) => {
      this.cargarProyectos();
       alert(response);
    },
    error: (err) => {
      console.error('Error al eliminar proyectos', err);
    }
  });
}

}