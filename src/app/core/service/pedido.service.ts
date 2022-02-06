import { Injectable } from '@angular/core';
import { Item } from '../model/item';

import { Pedido } from '../model/pedido';
import { ClienteService } from './cliente.service';
import { ProdutoService } from './produto.service';
import { LocalEntrega } from '../model/local-entrega';

@Injectable({
   providedIn: 'root'
})
export class PedidoService {

   private pedidos: Pedido[] = [
      new Pedido(
         1,
         this.clienteService.getClienteById(1),
         [
            new Item(
               1,
               this.produtoService.getProdutoById(1),
               1.250,
               33.75,
               new Date(2022, 2, 23),
            )
         ],
         new LocalEntrega(
            1,
            '97105-900',
            'Camobi',
            'Avenida Roraima',
            1405,
            'CEU II - Bloco 14',
            'Ao lado da União Universitária'
         ),
         new Date("2022/01/07"),
         new Date("2022/01/09"),
         new Date("2022/01/10"),
         33.75,
         "Finalizado"
      )
   ];

   constructor(
      private clienteService: ClienteService,
      private produtoService: ProdutoService
   ) {}

   adicionar(pedido: Pedido): void {
      pedido.id = this.pedidos.length + 1;
      this.pedidos.push(pedido);

      for (let item of pedido.itens) {
         this.produtoService.atualizarQtdEstoque(item.produto, -item.quantidade);
      }
   }

   getPedidos(): Pedido[] {
      return this.pedidos;
   }

   getPedidoById(id: number): Pedido {
      let pedido!: Pedido;

      for (pedido of this.pedidos) {
         if (pedido.id == id) {
            return pedido;
         }
      }

      return pedido;
   }

   alterarStatus(pedido: Pedido): void {
      this.pedidos[this.pedidos.indexOf(pedido)].status = pedido.status;
      this.pedidos[this.pedidos.indexOf(pedido)].dataFinalizado = pedido.dataFinalizado;
   }

   arquivar(pedido: Pedido): void {
      this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
   }
}
