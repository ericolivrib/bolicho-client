import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

   public usuario!: Usuario;
   public formulario!: FormGroup;

   constructor(
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private router: Router,
   ) {}

   ngOnInit(): void {
      this.formulario = this.formBuilder.group({
         email: [null, [Validators.required, Validators.email]],
         senha: [null, [Validators.required]]
      });
   }

   entrar(): void {
      if (this.formulario.valid) {
         new Usuario(
            1,
            this.formulario.get('email')?.value,
            this.formulario.get('senha')?.value
         );

         if (this.authService.autenticar(this.usuario)) {
            this.router.navigate(['principal']);
         }
      }
   }
}
