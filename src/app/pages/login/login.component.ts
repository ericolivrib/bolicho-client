import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/service/login.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

   public form!: FormGroup;

   constructor(
      private loginService: LoginService,
      private formBuilder: FormBuilder,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.montarForm();
   }

   montarForm(): void {
      this.form = this.formBuilder.group({
         email: [null, [Validators.required, Validators.email]],
         senha: [null, [Validators.required]]
      });
   }

   entrar(): void {
      if (this.form.valid) {
         this.loginService.login(this.form.value).subscribe(usuario => {
            this.loginService.iniciarSessao(usuario);
            this.router.navigate(['/principal']);
         });
      }
   }
}
