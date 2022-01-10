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
         "0001",
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
         new Date(''),
         44.98,
         "Em andamento"
      )
   ];

   constructor(
      private clienteService: ClienteService,
      private produtoService: ProdutoService
   ) {}

   adicionar(pedido: Pedido): void {
      this.pedidos.push(pedido);

      for (let item of pedido.itens) {
         this.produtoService.atualizarQtdEstoque(item.produto, -item.quantidade);
      }
   }

   getPedidos(): Array<Pedido> {
      return this.pedidos;
   }

   getPedidoById(id: number): Pedido {
      let pedido!: Pedido;

      for (pedido of this.pedidos) {
         if (pedido.id === id) {
            return pedido;
         }
      }

      return pedido;
   }

   atualizarStatus(pedido: Pedido): void {
      this.pedidos[this.pedidos.indexOf(pedido)].status == pedido.status;
      this.pedidos[this.pedidos.indexOf(pedido)].dataEntrega == pedido.dataEntrega;
   }

   arquivarPedido(pedido: Pedido): void {
      this.pedidos.splice(this.pedidos.indexOf(pedido, 1))
   }
}
