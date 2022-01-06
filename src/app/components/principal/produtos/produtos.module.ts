import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { AdicionarProdutoComponent } from './adicionar/adicionar-produto.component';
import { EditarProdutoComponent } from './editar/editar-produto.component';

@NgModule({
   declarations: [
      ProdutosComponent,
      AdicionarProdutoComponent,
      EditarProdutoComponent
   ],
   imports: [
      CommonModule,
      ProdutosRoutingModule
   ],
})
export class ProdutosModule {}
