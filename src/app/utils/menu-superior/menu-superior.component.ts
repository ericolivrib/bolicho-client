import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
   selector: 'app-menu-superior',
   templateUrl: './menu-superior.component.html',
   styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

   constructor(private loginService: LoginService) {}

   ngOnInit(): void {
   }

   logout(): void {
      this.loginService.logout();
   }
}
