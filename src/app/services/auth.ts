import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  /**
   * 🔑 Login: guarda el token automáticamente
   */
  login(credentials: { correo: string, password: string }): Observable<void> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  /**
   * 🚪 Logout: elimina el token
   */
  logout() {
    localStorage.removeItem('token');
  }

  /**
   * ✅ Comprueba si hay sesión activa
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
