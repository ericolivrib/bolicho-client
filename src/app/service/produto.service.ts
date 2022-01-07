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

   getProdutoById(id: number): Produto {
      let produto!: Produto;

      for (let p of this.produtos) {
         if (p.id === id) {
            produto = p;
         }
      }

      return produto;
   }

   adicionar(produto: Produto): void {
      this.produtos.push(produto);
   }

   atualizar(produto: Produto): void {
      this.produtos[this.produtos.indexOf(produto)] = produto;
   }

   remover(produto: Produto): void {
      this.produtos.splice(this.produtos.indexOf(produto, 1));
   }
}
