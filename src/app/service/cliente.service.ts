import { Injectable } from '@angular/core';

import { Cliente } from '../model/cliente';
import { Endereco } from '../model/endereco';

@Injectable({
   providedIn: 'root'
})
export class ClienteService {

   private clientes: Array<Cliente> = [
      new Cliente(
         1,
         'Fulano',
         'fulano@email.com',
         '(55) 99999-9999',
         '000.000.000-00',
         true,
         new Endereco(
            1,
            '44444-444',
            'Camobi',
            'Avenida Roraima',
            1405,
            'CEU II - Bloco',
            'Ao lado da União Universitária'
         )
      )
   ];

   constructor() {}

   adicionar(cliente: Cliente): void {
      this.clientes.push(cliente);
   }

   getClientes(): Array<Cliente> {
      return this.clientes;
   }

   remover(cliente: Cliente): void {
      this.clientes.splice(this.clientes.indexOf(cliente, 1));
   }

   atualizar(cliente: Cliente): void {
      this.clientes[this.clientes.indexOf(cliente)] = cliente;
   }

   getClienteById(id: number): Cliente {
      let cliente!: Cliente;

      for (cliente of this.clientes) {
         if (cliente.id === id) {
            return cliente;
         }
      }

      return cliente;
   }
}
