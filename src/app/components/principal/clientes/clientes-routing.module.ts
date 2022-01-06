import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { AdicionarClienteComponent } from './adicionar/adicionar-cliente.component';
import { EditarClienteComponent } from './editar/editar-cliente.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
   path: '',
   component: ClientesComponent,
   children: [
      { path: 'adicionar', component: AdicionarClienteComponent, canActivate: [AuthGuard] },
      { path: 'editar', component: EditarClienteComponent, canActivate: [AuthGuard] }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ClientesRoutingModule {}
