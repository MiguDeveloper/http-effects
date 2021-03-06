import { map } from 'rxjs/operators';
import { mergeMap, catchError, of } from 'rxjs';
import {
  cargarUsuario,
  cargarUsuarioSuccess,
  cargarUsuarioError,
} from './../actions/usuario.actions';
import { UsuarioService } from './../../services/usuario.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarUsuario),
      mergeMap((action) =>
        this.usuarioService.getUserById(action.id).pipe(
          map((user) => cargarUsuarioSuccess({ usuario: user })),
          catchError((err) => of(cargarUsuarioError({ payload: err })))
        )
      )
    )
  );
}
