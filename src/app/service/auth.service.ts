import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario';

@Injectable({
   providedIn: 'root',
})
export class AuthService {

   private autenticado: boolean = true;

   constructor() {}

   autenticar(usuario: Usuario): boolean {
      if (usuario.email === 'erico@email.com' && usuario.senha === '123') {
         this.autenticado = true;
      }
      return this.autenticado;
   }

   usuarioAutenticado(): boolean {
      return this.autenticado;
   }
}
