import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Cliente } from 'src/app/model/cliente';
import { Endereco } from 'src/app/model/endereco';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
   selector: 'app-adicionar-cliente',
   templateUrl: './adicionar-cliente.component.html',
   styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {

   public cliente!: Cliente;
   public endereco!: Endereco;
   public formulario!: FormGroup;

   constructor(
      private clientesService: ClienteService,
      private formBuilder: FormBuilder,
   ) {}

   ngOnInit(): void {
      this.formulario = this.formBuilder.group({
         nome: [null, [Validators.required]],
         email: [null, [Validators.required, Validators.email]],
         telefone: [null, [Validators.required]],
         cpf: [null],
         cep: [null],
         bairro: [null, [Validators.required]],
         logradouro: [null, [Validators.required]],
         numero: [null, [Validators.required]],
         complemento: [null],
         pontoReferencia: [null]
      });
   }

   adicionar(): void {
      console.log(this.formulario.value);

      if (this.formulario.valid) {
         this.cliente = new Cliente(
            this.clientesService.getClientes().length + 1,
            this.formulario.get('nome')?.value,
            this.formulario.get('email')?.value,
            this.formulario.get('telefone')?.value,
            this.formulario.get('cpf')?.value,
            true,
            new Endereco(
               1,
               this.formulario.get('cep')?.value,
               this.formulario.get('bairro')?.value,
               this.formulario.get('logradouro')?.value,
               this.formulario.get('numero')?.value,
               this.formulario.get('complemento')?.value,
               this.formulario.get('pontoReferencia')?.value
            )
         );

         this.clientesService.adicionar(this.cliente);
         this.formulario.reset();

         console.log(this.cliente);
      }
   }
}
