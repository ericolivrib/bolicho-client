import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../model/produto';

@Injectable({
   providedIn: 'root'
})
export class ProdutoService {

   private readonly url = 'http://localhost:8080/produtos/';

   constructor(private http: HttpClient) {}

   public buscar(): Observable<Produto[]> {
      return this.http.get<Produto[]>(this.url);
   }

   public incluir(produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(this.url + 'cadastrar', produto);
   }

   public atualizar(produto: Produto): Observable<Produto> {
      return this.http.put<Produto>(this.url + 'atualizar', produto);
   }

   public atualizarEstoque(id: number, qtdEstoque: number): Observable<Produto> {
      return this.http.put<Produto>(this.url + `atualizar-estoque/${id}`, {qtdEstoque});
   }

   public arquivar(id: number): Observable<any> {
      return this.http.delete(this.url + `desativar/${id}`);
   }
}
