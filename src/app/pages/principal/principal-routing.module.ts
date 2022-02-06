import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [{
   path: '',
   component: PrincipalComponent,
   children: [
      {
         path: 'clientes',
         loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
      },
      {
         path: 'pedidos',
         loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule),
      },
      {
         path: 'produtos',
         loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule),
      }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class PrincipalRoutingModule {}
