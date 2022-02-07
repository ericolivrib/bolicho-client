import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClienteService } from 'src/app/core/service/cliente.service';

@Component({
   selector: 'app-adicionar-cliente',
   templateUrl: './adicionar-cliente.component.html',
   styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {

   public form!: FormGroup;

   constructor(
      private clientesService: ClienteService,
      private formBuilder: FormBuilder,
   ) {}

   ngOnInit(): void {
      this.montarForm();
   }

   montarForm(): void {
      this.form = this.formBuilder.group({
         nome: [null, [Validators.required]],
         email: [null, [Validators.email]],
         telefone: [null, [Validators.required]],
         cpf: [null]
      });
   }

   adicionar(): void {
      console.log(this.form.value);

      if (this.form.valid) {
         this.clientesService.incluir(this.form.value).subscribe(retorno => {
            alert(retorno.nome + ' adicionado à lista de clientes');
         });
         this.form.reset();
      }
   }
}
