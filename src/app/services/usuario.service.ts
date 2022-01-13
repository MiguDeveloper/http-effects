import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlBase = environment.suffixAPI;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.urlBase}users?per_page=6`).pipe(
      map((rpta: any) => {
        return rpta['data'];
      })
    );
  }

  getUserById(id) {
    return this.http.get(`${this.urlBase}users/${id}`).pipe(
      map((rpta: any) => {
        return rpta['data'];
      })
    );
  }
}
