import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Pedido } from 'src/app/model/pedido';
import { Item } from 'src/app/model/item';
import { PedidoService } from 'src/app/service/pedido.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
   selector: 'app-visualizar-pedidos',
   templateUrl: './visualizar-pedidos.component.html',
   styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {

   pedidos!: Array<Pedido>;
   pedido!: Pedido;
   itens!: Array<Item>;
   formDataEntrega!: FormControl

   modalRef?: BsModalRef;

   constructor(
      private pedidoService: PedidoService,
      private modalService: BsModalService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.pedidos = this.pedidoService.getPedidos();
   }

   modalItens(template: TemplateRef<Pedido>, id: number): void {
      this.itens = this.pedidoService.getPedidoById(id).itens;

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-lg' })
      );
   }

   modalAcoes(template: TemplateRef<Pedido>, id: number): void {
      this.pedido = this.pedidoService.getPedidoById(id);

      this.formDataEntrega = this.fb.control(new Date(), [Validators.required]);

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-md' })
      );
   }

   alterarStatus(status: string): void {
      this.pedido.status = status;
      this.pedido.dataEntrega = this.formDataEntrega.value;
      this.pedidoService.atualizarStatus(this.pedido);
      this.modalRef?.hide();
   }

   arquivarPedido(): void {
      this.pedidoService.arquivarPedido(this.pedido);
      this.modalRef?.hide();
   }

   /**
    * Atribui as cores de fundo da coluna de status do pedido de acordo com o seu estado
    * @param status status do pedido
    * @returns classe do Bootstrap com as cores de fundo para a coluna de status
    */
   cssFundoStatus(status: string): string {
      let classe!: string;

      switch (status) {
         case 'Finalizado':
            classe = 'bg-success bg-opacity-25';
            break;

         case 'Cancelado':
            classe = 'bg-danger bg-opacity-25';
            break;
         case 'Atrasado':
            classe = 'bg-warning bg-opacity-25';
            break;

         case 'Em andamento':
            classe = 'bg-primary bg-opacity-25';
            break;
      }

      return classe;
   }

}
