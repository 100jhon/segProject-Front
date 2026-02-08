import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private apiUrlRegistrar = 'http://localhost:8080/api/proyecto/registrar';
  private apiUrlActualizar ='http://localhost:8080/api/proyecto/actualizar';

  constructor(private http: HttpClient) {}

  crearProyecto(proyecto: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrlRegistrar, proyecto, { headers });
  }

  actualizarProyecto(nuevoProyecto: any): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.put<any>(this.apiUrlActualizar, nuevoProyecto, { headers });
}

}
