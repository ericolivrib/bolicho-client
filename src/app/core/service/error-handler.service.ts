import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService} from './login.service';

@Injectable({
   providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

   constructor(private loginService: LoginService, private zone: NgZone) {
   }

   handleError(error: HttpErrorResponse | any): void {
      if (error instanceof HttpErrorResponse) {
         switch (error.status) {
            case 400:
               alert(error.error);
               break;
            case 403:
               alert('Acesso negado!');
               break;
            case 401:
               alert('Sessão expirada!');
               this.zone.run(() => {
                  this.loginService.logout();
               });
               break;
         }
      }
   }
}
