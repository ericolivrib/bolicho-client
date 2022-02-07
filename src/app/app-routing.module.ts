import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   {
      path: 'principal',
      loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalModule),
      canActivate: [AuthGuard]
   },
   { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
   { path: '', redirectTo: 'principal', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
