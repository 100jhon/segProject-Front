import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 👈 Importa FormsModule
import { CommonModule } from '@angular/common'; // 👈 Para *ngIf y *ngFor
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl:'./login.component.html',
  styleUrl:'./login.component.css'
})
export class Login {

  correo = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  // 🚀 Método principal: login
  onSubmit() {
    const credentials = { correo: this.correo, password: this.password };

    console.log('📦 Datos en credentials:', credentials)

    this.authService.login(credentials).subscribe({
      next: () => {
        console.log('✅ Login exitoso');
        this.router.navigate(['/dashboard']); // 👈 Redirige solo si login OK
      },
      error: (err) => {
        console.error('❌ Error en login', err);
        this.handleError(err);
      }
    });
  }

  // 🔄 Reset formulario
  resetForm() {
    this.correo = '';
    this.password = '';
    this.errorMessage = '';
  }

  // ❌ Manejo de errores
  handleError(err: any) {
    if (err.status === 401) {
      this.errorMessage = 'Correo o contraseña incorrectos';
    } else {
      this.errorMessage = 'Ocurrió un error en el servidor.';
    }
  }
}