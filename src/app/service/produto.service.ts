import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
   providedIn: 'root'
})
export class ProdutoService {

   private produtos: Produto[] = [
      new Produto(1, 'Queijo Colonial', 27.00, 'Kg', 5),
      new Produto(2, 'Licor', 6.00, 'Unidade', 10),
      new Produto(3, 'Chimia', 3.50, 'Unidade', 7)
   ]

   constructor() {}

   getProdutos(): Produto[] {
      return this.produtos;
   }

   getProdutoById(id: number): Produto {
      let produto!: Produto;

      for (produto of this.produtos) {
         if (produto.id == id) {
            return produto;
         }
      }

      return produto;
   }

   adicionar(produto: Produto): void {
      produto.id = this.produtos.length + 1;
      produto.qtdEstoque = 0;
      this.produtos.push(produto);
   }

   atualizar(produto: Produto): void {
      this.produtos[this.produtos.indexOf(produto)] = produto;
   }

   atualizarQtdEstoque(produto: Produto, quantidade: number): void {
      let p: Produto = this.produtos[this.produtos.indexOf(produto)];

      p.qtdEstoque += quantidade;

      if (p.qtdEstoque < 0) {
         p.qtdEstoque = 0;
      }
   }

   remover(produto: Produto): void {
      this.produtos.splice(this.produtos.indexOf(produto), 1);
   }
}
