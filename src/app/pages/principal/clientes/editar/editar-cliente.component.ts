import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Cliente } from 'src/app/core/model/cliente';
import { ClienteService } from 'src/app/core/service/cliente.service';

@Component({
   selector: 'app-visualizar-clientes',
   templateUrl: './editar-cliente.component.html',
   styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

   cliente!: Cliente;
   clientes!: Cliente[];
   modalRef?: BsModalRef;
   form!: FormGroup;

   constructor(
      private clientesService: ClienteService,
      private fb: FormBuilder,
      private modalService: BsModalService,
      // private router: Router
   ) {}

   ngOnInit(): void {
      this.clientes = this.clientesService.getClientes();
   }

   modalEditar(template: TemplateRef<Cliente>, id: number): void {

      this.cliente = this.clientesService.getClienteById(id);

      this.form = this.fb.group({
         nome: [this.cliente.nome, [Validators.required]],
         email: [this.cliente.email, [Validators.required, Validators.email]],
         telefone: [this.cliente.telefone, [Validators.required]],
         cpf: [this.cliente.cpf]
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

         this.clientesService.atualizar(this.form.value);
         this.modalRef?.hide();
      }
   }
}
