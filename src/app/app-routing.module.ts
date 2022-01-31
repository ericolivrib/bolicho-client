import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   {
      path: 'principal',
      canActivate: [AuthGuard],
      loadChildren: () => import('./components/principal/principal.module').then(m => m.PrincipalModule)
   },
   { path: 'login', component: LoginComponent },
   { path: '', redirectTo: 'principal', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
