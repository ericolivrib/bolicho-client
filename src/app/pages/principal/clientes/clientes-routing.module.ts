import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { AdicionarClienteComponent } from './adicionar/adicionar-cliente.component';
import { VisualizarClientesComponent } from './visualizar/visualizar-clientes.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
   path: '',
   component: ClientesComponent, canActivate: [AuthGuard],
   children: [
      { path: 'adicionar', component: AdicionarClienteComponent, canActivate: [AuthGuard] },
      { path: 'visualizar', component: VisualizarClientesComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'visualizar', pathMatch: 'full' }
   ]
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ClientesRoutingModule {}
