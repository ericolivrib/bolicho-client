import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidosComponent } from './pedidos.component';
import { AdicionarPedidoComponent } from './adicionar/adicionar-pedido.component';
import { VisualizarPedidosComponent } from './visualizar/visualizar-pedidos.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
   path: '',
   component: PedidosComponent, canActivate: [AuthGuard],
   children: [
      { path: 'adicionar', component: AdicionarPedidoComponent, canActivate: [AuthGuard] },
      { path: 'visualizar', component: VisualizarPedidosComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'visualizar', pathMatch: 'full' }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class PedidosRoutingModule {}
