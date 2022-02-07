import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Cliente } from 'src/app/core/model/cliente';
import { ClienteService } from 'src/app/core/service/cliente.service';

@Component({
   selector: 'app-visualizar-clientes',
   templateUrl: './visualizar-clientes.component.html',
   styleUrls: ['./visualizar-clientes.component.css']
})
export class VisualizarClientesComponent implements OnInit {

   cliente: Cliente = new Cliente();
   clientes: Cliente[] = [];
   modalRef?: BsModalRef;
   form!: FormGroup;

   constructor(
      private clientesService: ClienteService,
      private fb: FormBuilder,
      private modalService: BsModalService,
      private router: Router,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      this.buscarClientes();
   }

   buscarClientes(): void {
      this.clientesService.buscarClientes().subscribe(retorno => {
         this.clientes = retorno;
      });
   }

   modalEditar(template: TemplateRef<Cliente>, id: number): void {
      for (let c of this.clientes) {
         if (c.id == id) {
            this.cliente = c;
         }
      }

      this.form = this.fb.group({
         id: [this.cliente.id, [Validators.required]],
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
      for (let c of this.clientes) {
         if (c.id == id) {
            this.cliente = c;
         }
      }

      this.modalRef = this.modalService.show(template,
         Object.assign({}, { class: 'modal-md' })
      );
   }

   deletar(): void {
      this.clientesService.desativar(this.cliente.id).subscribe(retorno => {
         alert(retorno);
         this.buscarClientes();
      });
      console.log(this.cliente);
      this.modalRef?.hide();
   }

   atualizar(): void {
      if (this.form.valid) {
         this.clientesService.atualizar(this.form.value).subscribe(retorno => {
            alert(retorno.nome + ' atualizado!');
            this.buscarClientes();
         });
         this.modalRef?.hide();
      }

      // this.router.navigate(['principal', 'clientes', id, 'editar']);
   }
}
