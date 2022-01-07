import { Component, OnInit } from '@angular/core';

import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
   selector: 'app-visualizar-pedidos',
   templateUrl: './visualizar-pedidos.component.html',
   styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {

   pedidos!: Array<Pedido>;

   constructor(
      private pedidoService: PedidoService
   ) {}

   ngOnInit(): void {
      this.pedidos = this.pedidoService.getPedidos();
   }

}
