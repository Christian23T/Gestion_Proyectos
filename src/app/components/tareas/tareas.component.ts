import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { TareaService } from '../../services/tarea.service';
import { ProyectoService } from '../../services/proyecto.service';
import { UsuarioService } from '../../services/usuario.service';
import { Tarea } from '../../models/tarea.model';
import { Proyecto } from '../../models/proyecto.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule,
    MatInputModule, MatFormFieldModule, MatCardModule,
    MatIconModule, MatSelectModule, MatChipsModule
  ],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.css']
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];
  proyectos: Proyecto[] = [];
  usuarios: Usuario[] = [];
  columnas = ['id', 'titulo', 'proyecto', 'usuario', 'estado', 'fechaFin', 'acciones'];
  mostrarFormulario = false;
  editando = false;
  idEditando?: number;

  tareaForm: Tarea = {
    titulo: '', descripcion: '', estado: 'PENDIENTE',
    fechaInicio: '', fechaFin: ''
  };
  proyectoSeleccionado?: number;
  usuarioSeleccionado?: number;

  constructor(
    private tareaService: TareaService,
    private proyectoService: ProyectoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.cargar();
    this.proyectoService.listar().subscribe(d => this.proyectos = d);
    this.usuarioService.listar().subscribe(d => this.usuarios = d);
  }

  cargar() {
    this.tareaService.listar().subscribe(data => this.tareas = data);
  }

  nuevo() {
    this.tareaForm = { titulo: '', descripcion: '', estado: 'PENDIENTE', fechaInicio: '', fechaFin: '' };
    this.proyectoSeleccionado = undefined;
    this.usuarioSeleccionado = undefined;
    this.editando = false;
    this.mostrarFormulario = true;
  }

  editar(t: Tarea) {
    this.tareaForm = { ...t };
    this.proyectoSeleccionado = t.proyecto?.id;
    this.usuarioSeleccionado = t.usuario?.id;
    this.idEditando = t.id;
    this.editando = true;
    this.mostrarFormulario = true;
  }

  guardar() {
    if (!this.proyectoSeleccionado) return;
    if (this.editando && this.idEditando) {
      this.tareaService.actualizar(this.idEditando, this.tareaForm, this.usuarioSeleccionado)
        .subscribe(() => { this.cargar(); this.mostrarFormulario = false; });
    } else {
      this.tareaService.crear(this.tareaForm, this.proyectoSeleccionado, this.usuarioSeleccionado)
        .subscribe(() => { this.cargar(); this.mostrarFormulario = false; });
    }
  }

  cambiarEstado(id: number, estado: string) {
    this.tareaService.cambiarEstado(id, estado).subscribe(() => this.cargar());
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar esta tarea?')) {
      this.tareaService.eliminar(id).subscribe(() => this.cargar());
    }
  }

  cancelar() { this.mostrarFormulario = false; }

  colorEstado(estado: string): string {
    if (estado === 'PENDIENTE') return '#ff9800';
    if (estado === 'EN_PROCESO') return '#1976d2';
    return '#4caf50';
  }
}