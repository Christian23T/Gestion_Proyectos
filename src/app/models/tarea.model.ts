export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  estado: 'PENDIENTE' | 'EN_PROCESO' | 'TERMINADO';
  fechaInicio: string;
  fechaFin: string;
  proyecto?: {
    id: number;
    nombre: string;
  };
  usuario?: {
    id: number;
    nombre: string;
  };
}