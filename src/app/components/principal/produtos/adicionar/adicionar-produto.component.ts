import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
   selector: 'app-adicionar-produto',
   templateUrl: './adicionar-produto.component.html',
   styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

   produto: Produto;
   form!: FormGroup;

   constructor(
      private produtoService: ProdutoService,
      private fb: FormBuilder
   ) {
      this.produto = new Produto();
   }

   ngOnInit(): void {
      this.form = this.fb.group({
         descricao: [null, [Validators.required]],
         precoUnitario: [null, [Validators.required]],
         unidadeMedida: [null, [Validators.required]]
      });
   }

   adicionar(): void {
      if (this.form.valid) {
         this.produtoService.adicionar(this.form.value);
         this.form.reset();
      }
   }
}
