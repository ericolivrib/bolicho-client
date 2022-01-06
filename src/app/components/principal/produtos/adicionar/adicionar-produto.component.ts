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

   produto!: Produto;
   form!: FormGroup;

   constructor(
      private produtoService: ProdutoService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.form = this.fb.group({
         descricao: [null, [Validators.required]],
         precoUnitario: [null, [Validators.required]],
         unidadeMedida: [null, [Validators.required]]
      });
   }

   adicionar(): void {
      console.log(this.form.value);

      if (this.form.valid) {
         this.produto = new Produto(
            this.produtoService.getProdutos().length + 1,
            this.form.get('descricao')?.value,
            this.form.get('precoUnitario')?.value,
            this.form.get('unidadeMedida')?.value,
            0
         );

         this.produtoService.adicionar(this.produto);

         console.log(this.produto);
         this.form.reset();
      }
   }
}
