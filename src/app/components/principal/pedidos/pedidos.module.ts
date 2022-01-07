import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosComponent } from './pedidos.component';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { AdicionarPedidoComponent } from './adicionar/adicionar-pedido.component';
import { VisualizarPedidosComponent } from './visualizar/visualizar-pedidos.component';

@NgModule({
   declarations: [
      PedidosComponent,
      AdicionarPedidoComponent,
      VisualizarPedidosComponent
   ],
   imports: [
      CommonModule,
      PedidosRoutingModule
   ],
})
export class PedidosModule {}
