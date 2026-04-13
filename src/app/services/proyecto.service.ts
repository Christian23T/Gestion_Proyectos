import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({ providedIn: 'root' })
export class ProyectoService {
  private url = 'http://localhost:8080/api/proyectos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url);
  }

  obtener(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  crear(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url, proyecto);
  }

  actualizar(id: number, proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.url}/${id}`, proyecto);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}