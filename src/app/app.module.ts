import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      NotFoundComponent,
      LoginComponent,
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot()
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
