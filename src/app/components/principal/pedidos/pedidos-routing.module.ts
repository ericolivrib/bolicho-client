import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidosComponent } from './pedidos.component';
import { AdicionarPedidoComponent } from './adicionar/adicionar-pedido.component';
import { VisualizarPedidosComponent } from './visualizar/visualizar-pedidos.component';

const routes: Routes = [{
   path: '',
   component: PedidosComponent,
   children: [
      { path: 'adicionar', component: AdicionarPedidoComponent },
      { path: 'visualizar', component: VisualizarPedidosComponent },
      { path: '', redirectTo: 'visualizar', pathMatch: 'full' }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class PedidosRoutingModule {}
