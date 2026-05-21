import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService{
    
private apiUrlActividades = 'http://localhost:8080/api/actividad/obtener';

constructor(private http: HttpClient) {}

obtenerActividades(): Observable<any[]>{
    const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(this.apiUrlActividades, { headers });
}

}