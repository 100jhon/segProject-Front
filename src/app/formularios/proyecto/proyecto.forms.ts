import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsService } from "../../services/proyectos/forms.service";



@Component({
     selector: 'app-formulario-proyecto',
     templateUrl:'./proyecto.forms.html',
     imports: [CommonModule, FormsModule],
     styleUrls:['./proyecto.forms.css']
})


export class FormularioProyectoComponent {

  @Input() proyectoEditar: any | null = null; // <-- viene del padre
  @Output() cerrarFormulario = new EventEmitter<void>();
  @Output() proyectoCreado = new EventEmitter<void>();

  nuevoProyecto = {
    nombre: '',
    codigoProyecto: '',
    idEstado:'',
    idProyecto:'',
    descripcion: ''
  };

  constructor(private formsService: FormsService) {}

    ngOnChanges(changes: SimpleChanges): void {
    if (changes['proyectoEditar'] && this.proyectoEditar) {
      // Si hay un proyecto para editar, llenar el formulario
      this.nuevoProyecto = { ...this.proyectoEditar };
    }
  }

  guardarOActualizarProyecto() {
    if (this.nuevoProyecto.idProyecto) {
      // Modo EDITAR
      this.formsService.actualizarProyecto(this.nuevoProyecto).subscribe({
        next: () => {
          console.log('✏️ Proyecto actualizado');
          this.proyectoCreado.emit();
          this.cerrarFormulario.emit();
        },
        error: (err) => console.error('❌ Error al actualizar', err)
      });
    } else {
      // Modo CREAR
      this.formsService.crearProyecto(this.nuevoProyecto).subscribe({
        next: () => {
          console.log('✅ Proyecto creado');
          this.proyectoCreado.emit();
          this.cerrarFormulario.emit();
        },
        error: (err) => console.error('❌ Error al crear', err)
      });
    }
  }
}