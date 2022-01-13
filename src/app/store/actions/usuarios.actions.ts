import { Usuario } from './../../models/usuario.model';
import { createAction, props } from '@ngrx/store';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);
export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{ payload: any }>()
);
