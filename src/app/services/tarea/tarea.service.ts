import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService{
    
private apiUrlTarea = 'http://localhost:8080/api/tarea/obtener';

constructor(private http: HttpClient) {}

obtenerTareas(): Observable<any[]>{
    const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(this.apiUrlTarea, { headers });
}

}