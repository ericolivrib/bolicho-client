import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario';

@Injectable({
   providedIn: 'root',
})
export class LoginService {

   private readonly URL = 'http://localhost:8080/login/';
   private readonly USUARIO_ATIVO = 'user';

   constructor(private http: HttpClient, private router: Router) {}

   public login(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(this.URL, usuario);
   }

   public logout(): void {
      sessionStorage.removeItem(this.USUARIO_ATIVO);
      this.router.navigate(['/login']);
   }

   public iniciarSessao(usuario: Usuario): void {
      sessionStorage.setItem(this.USUARIO_ATIVO, JSON.stringify(usuario));
   }

   public usuarioAtivo(): Usuario {
      return JSON.parse(<string>sessionStorage.getItem(this.USUARIO_ATIVO));
   }
}
