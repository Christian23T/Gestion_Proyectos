import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea.model';

@Injectable({ providedIn: 'root' })
export class TareaService {
  private url = 'http://localhost:8080/api/tareas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.url);
  }

  listarPorProyecto(proyectoId: number): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.url}/proyecto/${proyectoId}`);
  }

  listarPorUsuario(usuarioId: number): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.url}/usuario/${usuarioId}`);
  }

  obtener(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.url}/${id}`);
  }

  crear(tarea: Tarea, proyectoId: number, usuarioId?: number): Observable<Tarea> {
    const params = usuarioId ? `?usuarioId=${usuarioId}` : '';
    return this.http.post<Tarea>(`${this.url}/proyecto/${proyectoId}${params}`, tarea);
  }

  cambiarEstado(id: number, estado: string): Observable<Tarea> {
    return this.http.patch<Tarea>(`${this.url}/${id}/estado?estado=${estado}`, {});
  }

  actualizar(id: number, tarea: Tarea, usuarioId?: number): Observable<Tarea> {
    const params = usuarioId ? `?usuarioId=${usuarioId}` : '';
    return this.http.put<Tarea>(`${this.url}/${id}${params}`, tarea);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}