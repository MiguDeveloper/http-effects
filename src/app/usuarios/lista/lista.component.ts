import { cargarUsuarios } from './../../store/actions/usuarios.actions';
import { AppState } from './../../store/app.reducers';
import { Usuario } from './../../models/usuario.model';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading = false;
  error: any;

  constructor(
    private usuarioService: UsuarioService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.loading = loading;
      this.error = error;
      this.usuarios = users;
    });

    this.store.dispatch(cargarUsuarios());

    // this.usuarioService.getUsers().subscribe((users) => {
    //   this.usuarios = users;
    // });
  }
}
