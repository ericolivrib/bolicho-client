import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/model/cliente';
import { Item } from 'src/app/model/item';
import { Pedido } from 'src/app/model/pedido';
import { Produto } from 'src/app/model/produto';
import { ClienteService } from 'src/app/service/cliente.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
   selector: 'app-adicionar-pedido',
   templateUrl: './adicionar-pedido.component.html',
   styleUrls: ['./adicionar-pedido.component.css']
})
export class AdicionarPedidoComponent implements OnInit {

   pedido!: Pedido;
   itens: Array<Item> = [];
   produtos!: Array<Produto>;
   clientes!: Array<Cliente>;
   formPedido!: FormGroup;
   formItens!: FormGroup;

   constructor(
      private pedidoService: PedidoService,
      private produtoService: ProdutoService,
      private clienteService: ClienteService,
      private fb: FormBuilder,
      private router: Router,
   ) {}

   ngOnInit(): void {
      this.clientes = this.clienteService.getClientes();
      this.produtos = this.produtoService.getProdutos();

      this.formPedido = this.fb.group({
         codigo: [null, [Validators.required]],
         cliente: [null, [Validators.required]],
         dataPedido: [null, [Validators.required]],
         prazoEntrega: [null, [Validators.required]],
         total: [null]
      });

      this.formItens = this.fb.group({
         produto: [null, [Validators.required]],
         dataValidade: [null, [Validators.required]],
         quantidade: [null, [Validators.required]],
         subtotal: [null]
      });
   }

   calcularSubtotal(): number {
      let produto = this.produtoService.getProdutoById(this.formItens.get('produto')?.value);
      let preco: number = produto.precoUnitario;
      let quantidade: number = this.formItens.get('quantidade')?.value;

      return preco * quantidade;
   }

   calcularTotal(): number {
      let total: number = 0;

      for (let item of this.itens) {
         total += item.subtotal;
      }

      return total;
   }

   adicionarItem(): void {
      if (this.formItens.valid) {
         let item: Item = new Item(
            0,
            this.produtoService.getProdutoById(this.formItens.get('produto')?.value),
            this.calcularSubtotal(),
            this.formItens.get('quantidade')?.value,
            this.formItens.get('dataValidade')?.value
         );

         this.itens.push(item);
         this.formItens.reset();
      }
   }

   removerItem(item: Item): void {
      this.itens.splice(this.itens.indexOf(item, 1));
   }

   adicionarPedido(): void {
      if (this.formPedido.valid && this.itens !== null) {
         this.pedido = new Pedido(
            0,
            this.formPedido.get('codigo')?.value,
            this.clienteService.getClienteById(this.formPedido.get('cliente')?.value),
            this.itens,
            this.formPedido.get('dataPedido')?.value,
            this.formPedido.get('prazoEntrega')?.value,
            new Date(0, 0, 0),
            this.calcularTotal(),
            'Em andamento'
         );

         this.pedidoService.adicionar(this.pedido);

         console.log(this.pedido);

         this.formPedido.reset();
         this.router.navigate(['principal', 'pedidos', 'visualizar']);
      }
   }
}
