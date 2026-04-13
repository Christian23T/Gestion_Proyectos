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
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule,
    MatInputModule, MatFormFieldModule, MatCardModule,
    MatIconModule, MatSelectModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  columnas = ['id', 'nombre', 'email', 'rol', 'acciones'];
  mostrarFormulario = false;
  editando = false;
  idEditando?: number;

  usuarioForm: Usuario = { nombre: '', email: '', rol: 'MIEMBRO' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() { this.cargar(); }

  cargar() {
    this.usuarioService.listar().subscribe(data => this.usuarios = data);
  }

  nuevo() {
    this.usuarioForm = { nombre: '', email: '', rol: 'MIEMBRO' };
    this.editando = false;
    this.mostrarFormulario = true;
  }

  editar(u: Usuario) {
    this.usuarioForm = { ...u };
    this.idEditando = u.id;
    this.editando = true;
    this.mostrarFormulario = true;
  }

  guardar() {
    if (this.editando && this.idEditando) {
      this.usuarioService.actualizar(this.idEditando, this.usuarioForm).subscribe(() => {
        this.cargar();
        this.mostrarFormulario = false;
      });
    } else {
      this.usuarioService.crear(this.usuarioForm).subscribe(() => {
        this.cargar();
        this.mostrarFormulario = false;
      });
    }
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar este usuario?')) {
      this.usuarioService.eliminar(id).subscribe(() => this.cargar());
    }
  }

  cancelar() { this.mostrarFormulario = false; }
}