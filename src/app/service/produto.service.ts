import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
   providedIn: 'root'
})
export class ProdutoService {

   private produtos: Array<Produto> = [
      new Produto(
         1,
         "Queijo Colonial",
         27.00,
         "Quilograma/Kg",
         5
      )
   ]

   constructor() {}

   getProdutos(): Array<Produto> {
      return this.produtos;
   }

   adicionar(produto: Produto): void {
      this.produtos.push(produto);
   }
}
