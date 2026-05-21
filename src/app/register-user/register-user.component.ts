import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

import { EmpresaFormComponent } from './empresa-form/register-empresa.component';
import { UsuarioAdminFormComponent } from './usuario-admin-form/register-admin.component';


@Component({
  selector: 'app-register-user',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmpresaFormComponent,
    UsuarioAdminFormComponent
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})

export class RegisterUserComponent {

  empresaForm: FormGroup;
  usuarioForm: FormGroup;
  currentStep = 1;

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) {

    this.empresaForm = this.fb.group({
      tipoPersona: ['', Validators.required],
      documento: ['', Validators.required],
      nit: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });

    this.usuarioForm = this.fb.group({
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  nextStep() {
    if (this.empresaForm.invalid) {
      this.empresaForm.markAllAsTouched();
      return;
    }

    this.currentStep = 2;
  }

  prevStep() {
    this.currentStep = 1;
  }

  registrar() {

    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }

    const request = {
      empresa: this.empresaForm.value,
      usuarioAdmin: this.usuarioForm.value
    };
    this.authService.register(request)
      .subscribe({

        next: (token) => {

          // limpiar formularios
          this.empresaForm.reset();
          this.usuarioForm.reset();

          // volver al paso 1
          this.currentStep = 1;

          // redirigir al login
          this.router.navigate(['/login']);

          console.log('Registro exitoso');
          console.log('Token:', token);

        },

        error: (error) => {

          console.error(error);

        }

      });
  }
}
