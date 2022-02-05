import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PedidosComponent } from './pedidos.component';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { AdicionarPedidoComponent } from './adicionar/adicionar-pedido.component';
import { VisualizarPedidosComponent } from './visualizar/visualizar-pedidos.component';
import { PopoverModule } from 'ngx-bootstrap/popover'
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
   declarations: [
      PedidosComponent,
      AdicionarPedidoComponent,
      VisualizarPedidosComponent
   ],
   imports: [
      CommonModule,
      PedidosRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      PopoverModule.forRoot(),
      NgxMaskModule.forRoot(),
      CurrencyMaskModule
   ],
})
export class PedidosModule {}
