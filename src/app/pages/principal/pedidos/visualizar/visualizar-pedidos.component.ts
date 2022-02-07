import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Pedido } from 'src/app/core/model/pedido';
import { Item } from 'src/app/core/model/item';
import { LocalEntrega } from 'src/app/core/model/local-entrega';
import { PedidoService } from 'src/app/core/service/pedido.service';
import { Status } from 'src/app/core/model/status';

@Component({
   selector: 'app-visualizar-pedidos',
   templateUrl: './visualizar-pedidos.component.html',
   styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {

   pedidos: Pedido[] = [];
   pedido: Pedido = new Pedido();
   itens: Item[] = [];
   localEntrega: LocalEntrega = new LocalEntrega();
   dataAtual: Date = new Date();
   formFinalizar!: FormGroup;
   modalRef?: BsModalRef;

   constructor(
      private pedidoService: PedidoService,
      private modalService: BsModalService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.buscarPedidos();
   }

   buscarPedidos(): void {
      this.pedidoService.buscar().subscribe(retorno => {
         this.pedidos = retorno;
         this.verificarAtraso();
      });
   }

   verificarAtraso(): void {
      for (let p of this.pedidos) {
         if (this.dataAtual.getDate > p.dataEntrega.getDate) {
            this.pedido = p;
            this.alterarStatus('Atrasado');
         }
      }
   }

   modalItens(template: TemplateRef<Item[]>, itens: Item[]): void {
      this.itens = itens;

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-lg' })
      );
   }

   modalLocal(template: TemplateRef<LocalEntrega>, localEntrega: LocalEntrega): void {
      this.localEntrega = localEntrega;

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-lg' })
      );
   }

   modalAcoes(template: TemplateRef<Pedido>, pedido: Pedido): void {
      this.pedido = pedido;

      this.modalRef = this.modalService.show(template,
         Object.assign({}, {class: 'modal-md'})
      );
   }

   alterarStatus(status: string): void {
      this.pedido.status = status;

      console.log(status);

      this.pedidoService.atualizarStatus(this.pedido.id, status)
         .subscribe(retorno => {
            alert('Status do pedido alterado para ' + retorno.status);
         });
      this.modalRef?.hide();

      console.log(this.pedido);
   }

   deletarPedido(): void {
      this.pedidoService.deletar(this.pedido.id).subscribe(retorno => {
         console.log('Pedido deletado');
         this.buscarPedidos();
      });
      this.modalRef?.hide();
   }

   /**
    * Atribui as cores de fundo da coluna de status do pedido de acordo com o seu estado
    * @param status andamento do pedido
    * @returns classe do Bootstrap com as cores de fundo
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
