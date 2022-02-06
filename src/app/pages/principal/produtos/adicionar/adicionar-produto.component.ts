import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produto } from 'src/app/core/model/produto';
import { ProdutoService } from 'src/app/core/service/produto.service';

@Component({
   selector: 'app-adicionar-produto',
   templateUrl: './adicionar-produto.component.html',
   styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

   produto: Produto = new Produto();;
   form!: FormGroup;

   constructor(
      private produtoService: ProdutoService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.montarForm();
   }

   montarForm(): void {
      this.form = this.fb.group({
         descricao: [null, [Validators.required]],
         precoUnitario: [null, [Validators.required]],
         unidadeMedida: [null, [Validators.required]],
         qtdEstoque: [null]
      });
   }

   adicionar(): void {
      console.log(this.form.value);

      if (this.form.valid) {
         this.produtoService.adicionar(this.form.value);
         this.form.reset();
      }
   }
}
