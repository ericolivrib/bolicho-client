import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
   providedIn: 'root'
})
export class ProdutoService {

   produtos: Array<Produto> = [
      new Produto(

      )
   ]

   constructor() {}
}
