import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { AdicionarProdutoComponent } from './adicionar/adicionar-produto.component';
import { VisualizarProdutosComponent } from './visualizar/visualizar-produtos.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
   path: '',
   component: ProdutosComponent, canActivate: [AuthGuard],
   children: [
      { path: 'adicionar', component: AdicionarProdutoComponent, canActivate: [AuthGuard] },
      { path: 'editar', component: VisualizarProdutosComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'editar', pathMatch: 'full' }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ProdutosRoutingModule {}
