import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Produto } from 'src/app/core/model/produto';
import { ProdutoService } from 'src/app/core/service/produto.service';

@Component({
   selector: 'app-editar-produto',
   templateUrl: './visualizar-produtos.component.html',
   styleUrls: ['./visualizar-produtos.component.css']
})
export class VisualizarProdutosComponent implements OnInit {

   produtos: Produto[] = [];
   produto: Produto = new Produto();
   modalRef?: BsModalRef;
   formEditar!: FormGroup;
   formQtd!: FormGroup;

   constructor(
      private produtoService: ProdutoService,
      private modalService: BsModalService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.buscarProdutos();
   }

   buscarProdutos(): void {
      this.produtoService.buscar().subscribe(data => {
         this.produtos = data;
      });
   }

   montarForm(): void {
      this.formEditar = this.fb.group({
         id: [this.produto.id, [Validators.required]],
         descricao: [this.produto.descricao, [Validators.required]],
         precoUnitario: [this.produto.precoUnitario, [Validators.required]],
         unidadeMedida: [this.produto.unidadeMedida, [Validators.required]]
      });

      this.formQtd = this.fb.group({
         quantidade: [this.produto.qtdEstoque, [Validators.required, Validators.minLength(0)]]
      });
   }

   modalAcoes(template: TemplateRef<Produto>, produto: Produto): void {
      this.produto = produto;

      this.montarForm();

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-md' })
      );
   }

   editarProduto(): void {
      if (this.formEditar.valid && this.formEditar.dirty) {
         this.produtoService.atualizar(this.formEditar.value).subscribe(() => {
            alert('Produto atualizado!');
            this.buscarProdutos();
         });
         this.modalRef?.hide();
      }
   }

   removerProduto(): void {
      this.produtoService.arquivar(this.produto.id).subscribe(() => {
         alert('Produto deletado!');
         this.buscarProdutos();
      });
      this.modalRef?.hide();
   }

   atualizarEstoque(): void {
      if (this.formQtd.valid) {
         this.produtoService.atualizarEstoque(this.produto.id, this.formQtd.value.quantidade).subscribe(() => {
            alert('Estoque de atualizado!');
            this.buscarProdutos();
         });
         this.modalRef?.hide();
      }
   }
}
