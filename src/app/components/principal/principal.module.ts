import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { MenuLateralComponent } from '../utils/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from '../utils/menu-superior/menu-superior.component';

@NgModule({
   declarations: [
      PrincipalComponent,
      MenuLateralComponent,
      MenuSuperiorComponent
   ],
   imports: [
      CommonModule,
      PrincipalRoutingModule
   ],
})
export class PrincipalModule {}
