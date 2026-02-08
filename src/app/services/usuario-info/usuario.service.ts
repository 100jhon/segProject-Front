import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface UsuarioInfo {
  nombre: string;
  empresa: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/usuario-info';

  getUsuarioInfo(): Observable<UsuarioInfo> {
    const token = localStorage.getItem('token'); // asumimos que ya guardaste el token al iniciar sesión

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<UsuarioInfo>(this.apiUrl, { headers });
  }
}
