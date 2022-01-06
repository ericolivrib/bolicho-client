import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { AdicionarClienteComponent } from './adicionar/adicionar-cliente.component';
import { EditarClienteComponent } from './editar/editar-cliente.component';

@NgModule({
   declarations: [
      ClientesComponent,
      AdicionarClienteComponent,
      EditarClienteComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ClientesRoutingModule
   ],
})
export class ClientesModule {}
