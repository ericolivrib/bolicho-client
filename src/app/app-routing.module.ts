import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   {
      path: 'principal',
      canActivate: [AuthGuard],
      loadChildren: () => import('./components/principal/principal.module').then(m => m.PrincipalModule)
   },
   { path: 'login', component: LoginComponent },
   { path: '**', component: NaoEncontradoComponent },
   { path: '', redirectTo: 'principal', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
