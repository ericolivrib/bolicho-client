import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarPedidoComponent } from './adicionar/adicionar-pedido.component';

import { PedidosComponent } from './pedidos.component';

const routes: Routes = [{
   path: '',
   component: PedidosComponent,
   children: [
      { path: 'adicionar', component: AdicionarPedidoComponent }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class PedidosRoutingModule {}
