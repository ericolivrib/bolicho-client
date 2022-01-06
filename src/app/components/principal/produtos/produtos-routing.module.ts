import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from '../produtos/produtos.component';
import { AdicionarProdutoComponent } from './adicionar/adicionar-produto.component';
import { EditarProdutoComponent } from './editar/editar-produto.component';


const routes: Routes = [{
   path: '',
   component: ProdutosComponent,
   children: [
      { path: 'adicionar', component: AdicionarProdutoComponent },
      { path: 'editar', component: EditarProdutoComponent }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ProdutosRoutingModule {}
