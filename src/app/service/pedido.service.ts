import { Injectable } from '@angular/core';
import { Item } from '../model/item';

import { Pedido } from '../model/pedido';
import { ClienteService } from './cliente.service';
import { ProdutoService } from './produto.service';

@Injectable({
   providedIn: 'root'
})
export class PedidoService {

   private pedidos: Array<Pedido> = [
      new Pedido(
         1,
         this.clienteService.getClienteById(1),
         [
            new Item(
               1,
               this.produtoService.getProdutoById(1),
               44.98,
               1.214,
               new Date(2022, 2, 23),
            )
         ],
         new Date("2022/01/07"),
         new Date("2022/01/09"),
         new Date("2022/01/09"),
         44.98,
         "Finalizado"
      )
   ];

   constructor(
      private clienteService: ClienteService,
      private produtoService: ProdutoService
   ) {}

   getPedidos(): Array<Pedido> {
      return this.pedidos;
   }
}
