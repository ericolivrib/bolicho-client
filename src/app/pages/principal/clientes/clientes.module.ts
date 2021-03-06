import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { AdicionarClienteComponent } from './adicionar/adicionar-cliente.component';
import { VisualizarClientesComponent } from './visualizar/visualizar-clientes.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
   declarations: [
      ClientesComponent,
      AdicionarClienteComponent,
      VisualizarClientesComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxMaskModule.forRoot(),
      ClientesRoutingModule
   ],
})
export class ClientesModule {}
