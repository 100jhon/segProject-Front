import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  private apiUrl = 'http://localhost:8080/api/proyecto/listar';
  private apiUrlEliminarProyecto ='http://localhost:8080/api/proyecto/eliminar';

  constructor(private http: HttpClient) {}

  obtenerProyectos(): Observable<any[]> {
    const token = localStorage.getItem('token'); // o de donde lo tengas guardado

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }


 eliminarProyectos(idsSeleccionados: number[]): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  return this.http.request('delete', `${this.apiUrlEliminarProyecto}`, {
    headers,
    body: idsSeleccionados,
    responseType: 'text' // 🔹 importante
  });
}

}
