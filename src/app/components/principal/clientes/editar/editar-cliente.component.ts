import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Cliente } from 'src/app/model/cliente';
import { Endereco } from 'src/app/model/endereco';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
   selector: 'app-visualizar-clientes',
   templateUrl: './editar-cliente.component.html',
   styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

   cliente!: Cliente;
   clientes!: Array<Cliente>;
   endereco!: Endereco;
   modalRef?: BsModalRef;
   form!: FormGroup;

   constructor(
      private clientesService: ClienteService,
      private fb: FormBuilder,
      private modalService: BsModalService
   ) { }

   ngOnInit(): void {
      this.clientes = this.clientesService.getClientes();
   }

   modalEndereco(template: TemplateRef<any>, id: number): void {
      this.endereco = this.clientesService.getClienteById(id).endereco;
      this.modalRef = this.modalService.show(template);
   }

   modalEditar(template: TemplateRef<Cliente>, id: number): void {
      this.cliente = this.clientesService.getClienteById(id);

      this.form = this.fb.group({
         nome: [this.cliente.nome, [Validators.required]],
         email: [this.cliente.email, [Validators.required, Validators.email]],
         telefone: [this.cliente.telefone, [Validators.required]],
         cpf: [this.cliente.cpf],
         cep: [this.cliente.endereco.cep],
         bairro: [this.cliente.endereco.bairro, [Validators.required]],
         logradouro: [this.cliente.endereco.logradouro, [Validators.required]],
         numero: [this.cliente.endereco.numero, [Validators.required]],
         complemento: [this.cliente.endereco.complemento],
         pontoReferencia: [this.cliente.endereco.pontoReferencia]
      });

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-lg' })
      );
   }

   modalRemover(template: TemplateRef<Cliente>, id: number): void {
      this.cliente = this.clientesService.getClienteById(id);

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-md' })
      );
   }

   removerCliente(): void {
      this.clientesService.remover(this.cliente);
      this.modalRef?.hide();
   }

   editarCliente(): void {
      if (this.form.valid) {
         this.cliente.nome = this.form.get('nome')?.value;
         this.cliente.email = this.form.get('email')?.value;
         this.cliente.telefone = this.form.get('telefone')?.value;
         this.cliente.cpf = this.form.get('cpf')?.value;
         this.cliente.endereco.cep = this.form.get('cep')?.value;
         this.cliente.endereco.bairro = this.form.get('bairro')?.value;
         this.cliente.endereco.logradouro = this.form.get('logradouro')?.value;
         this.cliente.endereco.numero = this.form.get('numero')?.value;
         this.cliente.endereco.complemento = this.form.get('complemento')?.value;
         this.cliente.endereco.pontoReferencia = this.form.get('pontoReferencia')?.value;

         this.clientesService.atualizar(this.cliente);
         this.modalRef?.hide();
      }
   }
}
