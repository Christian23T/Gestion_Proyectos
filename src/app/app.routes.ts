import { Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'usuarios', component: UsuariosComponent },
];