import {
  cargarUsuario,
  cargarUsuarioSuccess,
  cargarUsuarioError,
} from './../actions/usuario.actions';
import { Usuario } from './../../models/usuario.model';
import { Action, createReducer, on } from '@ngrx/store';

export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id: id })),
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload?.url,
      name: payload?.name,
      message: payload?.message,
    },
  }))
);

export function usuarioReducer(state = usuarioInitialState, action: Action) {
  return _usuarioReducer(state, action);
}
