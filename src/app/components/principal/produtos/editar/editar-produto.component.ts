import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
   selector: 'app-editar-produto',
   templateUrl: './editar-produto.component.html',
   styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

   produtos!: Array<Produto>;
   produto!: Produto;
   modalRef?: BsModalRef;
   form!: FormGroup;

   constructor(
      private produtoService: ProdutoService,
      private modalService: BsModalService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.produtos = this.produtoService.getProdutos();
   }

   modalEditar(template: TemplateRef<Produto>, id: number): void {
      this.produto = this.produtoService.getProdutoById(id);

      this.form = this.fb.group({
         descricao: [this.produto.descricao, [Validators.required]],
         precoUnitario: [this.produto.precoUnitario, [Validators.required]],
         unidadeMedida: [this.produto.unidadeMedida, [Validators.required]]
      });

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-md' })
      );
   }

   editarProduto(): void {
      this.produtoService.atualizar(this.produto);
      this.modalRef?.hide();
   }
}
