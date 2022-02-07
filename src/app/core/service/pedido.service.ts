import { Injectable } from '@angular/core';
import { Item } from '../model/item';

import { Pedido } from '../model/pedido';
import { ClienteService } from './cliente.service';
import { ProdutoService } from './produto.service';
import { LocalEntrega } from '../model/local-entrega';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class PedidoService {

   private readonly url = 'http://localhost:8080/pedidos/';

   constructor(private http: HttpClient) {}

   public buscar(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(this.url);
   }

   public incluir(pedido: Pedido): Observable<Pedido> {
      return this.http.post<Pedido>(this.url + 'cadastrar', pedido);
   }

   public atualizarStatus(id: number, status: string): Observable<Pedido> {
      return this.http.put<Pedido>(this.url + `alterar-status/${id}`, {status});
   }

   public deletar(id: number) {
      return this.http.delete(this.url + `deletar/${id}`);
   }
}
