import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorHandlerService } from './core/service/error-handler.service';
import { JwtInterceptorService } from './core/service/jwt-interceptor.service';

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
      HttpClientModule,
      ModalModule.forRoot(),
      NgxMaskModule.forRoot()
   ],
   providers: [
      {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
      // {provide: ErrorHandler, useClass: ErrorHandlerService}
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
