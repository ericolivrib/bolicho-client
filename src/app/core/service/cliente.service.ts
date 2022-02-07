import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../model/cliente';

@Injectable({
   providedIn: 'root'
})
export class ClienteService {

   private readonly URL = 'http://localhost:8080/clientes/';

   constructor(private http: HttpClient) {}

   public buscarClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.URL);
   }

   public buscarCliente(id: number): Observable<Cliente> {
      return this.http.get<Cliente>(this.URL + `${id}`);
   }

   public incluir(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.URL + 'cadastrar', cliente);
   }

   public atualizar(cliente: Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(this.URL + 'atualizar', cliente);
   }

   public desativar(id: number): Observable<any> {
      return this.http.delete(this.URL + `desativar/${id}`);
   }
}
