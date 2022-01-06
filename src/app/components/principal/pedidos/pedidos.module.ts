import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosComponent } from './pedidos.component';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { AdicionarPedidoComponent } from './adicionar/adicionar-pedido.component';

@NgModule({
   declarations: [
      PedidosComponent,
      AdicionarPedidoComponent
   ],
   imports: [
      CommonModule,
      PedidosRoutingModule
   ],
})
export class PedidosModule {}
