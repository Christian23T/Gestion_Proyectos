import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule,
    MatInputModule, MatFormFieldModule, MatCardModule,
    MatIconModule, MatDialogModule
  ],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  columnas = ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'acciones'];
  mostrarFormulario = false;
  editando = false;

  proyectoForm: Proyecto = {
    nombre: '', descripcion: '', fechaInicio: '', fechaFin: ''
  };
  idEditando?: number;

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit() { this.cargar(); }

  cargar() {
    this.proyectoService.listar().subscribe(data => this.proyectos = data);
  }

  nuevo() {
    this.proyectoForm = { nombre: '', descripcion: '', fechaInicio: '', fechaFin: '' };
    this.editando = false;
    this.mostrarFormulario = true;
  }

  editar(p: Proyecto) {
    this.proyectoForm = { ...p };
    this.idEditando = p.id;
    this.editando = true;
    this.mostrarFormulario = true;
  }

  guardar() {
    if (this.editando && this.idEditando) {
      this.proyectoService.actualizar(this.idEditando, this.proyectoForm).subscribe(() => {
        this.cargar();
        this.mostrarFormulario = false;
      });
    } else {
      this.proyectoService.crear(this.proyectoForm).subscribe(() => {
        this.cargar();
        this.mostrarFormulario = false;
      });
    }
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar este proyecto?')) {
      this.proyectoService.eliminar(id).subscribe(() => this.cargar());
    }
  }

  cancelar() { this.mostrarFormulario = false; }
}
