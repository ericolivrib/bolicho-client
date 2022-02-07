import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/core/model/cliente';
import { Item } from 'src/app/core/model/item';
import { Pedido } from 'src/app/core/model/pedido';
import { Produto } from 'src/app/core/model/produto';
import { LocalEntrega } from 'src/app/core/model/local-entrega';
import { ClienteService } from 'src/app/core/service/cliente.service';
import { PedidoService } from 'src/app/core/service/pedido.service';
import { ProdutoService } from 'src/app/core/service/produto.service';

@Component({
   selector: 'app-adicionar-pedido',
   templateUrl: './adicionar-pedido.component.html',
   styleUrls: ['./adicionar-pedido.component.css']
})
export class AdicionarPedidoComponent implements OnInit {

   pedido: Pedido = new Pedido();
   item: Item = new Item();
   itens: Item[] = [];
   produto: Produto = new Produto();
   produtos: Produto[] = [];
   cliente: Cliente = new Cliente();
   clientes: Cliente[] = [];
   localEntrega: LocalEntrega = new LocalEntrega();
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
      this.buscarClientes();
      this.buscarProdutos();
      this.montarForm();
   }

   buscarClientes(): void {
      this.clienteService.buscarClientes().subscribe(retorno => {
         this.clientes = retorno;
      });
   }

   buscarProdutos(): void {
      this.produtoService.buscar().subscribe(retorno => {
         this.produtos = retorno;
      });
   }

   montarForm(): void {
      this.formPedido = this.fb.group({
         cliente: [null, [Validators.required]],
         dataPedido: [null, [Validators.required]],
         dataEntrega: [null, [Validators.required]],
         total: [null],

         localEntrega: this.fb.group({
            cep: [null],
            bairro: [null, [Validators.required]],
            logradouro: [null, [Validators.required]],
            numero: [null, [Validators.required]],
            complemento: [null],
            pontoReferencia: [null]
         })
      });

      this.formItens = this.fb.group({
         produto: [null, [Validators.required]],
         dataValidade: [null, [Validators.required]],
         quantidade: [null, [Validators.required, Validators.min(0.001)]],
         subtotal: [null]
      });
   }

   arredondarQtd(): void {
      for (let p of this.produtos) {
         if (p.id == this.formItens.get('produto')?.value) {
            let quantidade: number = this.formItens.get('quantidade')?.value;

            if (p.unidadeMedida === 'Unidade') {
               let qtd: number = quantidade;

               if (quantidade > qtd) {
                  this.formItens.get('quantidade')?.setValue(Math.ceil(quantidade));
               } else {
                  this.formItens.get('quantidade')?.setValue(Math.floor(quantidade));
               }
            }

            this.calcularSubtotal();
         }
      }
   }

   /**
    * Calcula dinamicamente o subtotal do 'item' de acordo com sua quantidade
    */
   calcularSubtotal(): void {
      let produto!: Produto;

      for (let p of this.produtos) {
         if (p.id == this.formItens.get('produto')?.value) {
            produto = p;
         }
      }

      let preco: number = produto.precoUnitario;
      let quantidade: number = this.formItens.get('quantidade')?.value;

      this.formItens.get('subtotal')?.setValue(preco * quantidade);
   }

   /**
    * Impede que valores negativos ou acima da quantidade máxima de estoque de
    * um determinado produto sejam registrados
    */
   limitarQuantidade(): void {
      let id: number = this.formItens.value.produto;

      for (let p of this.produtos) {
         if (p.id == id) {
            this.produto = p;
         }
      }

      let quantidade: number = this.formItens.value.quantidade;

      if (quantidade < 0) {
         this.formItens.get('quantidade')?.setValue(0);
         this.calcularSubtotal();
      } else if (quantidade > this.produto.qtdEstoque && id != null) {
         this.formItens.get('quantidade')?.setValue(this.produto.qtdEstoque);
         this.calcularSubtotal();
      }
   }

   /**
    * Confirma se o produto tem itens em estoque
    * @param qtd quantidade disponível do produto
    * @returns confirmação
    */
   semEstoque(qtd: number): boolean {
      return qtd <= 0;
   }

   calcularTotal(): void {
      let total: number = 0;

      for (let item of this.itens) {
         total += item.subtotal;
      }

      this.formPedido.get('total')?.setValue(total);
   }

   salvarItem(): void {
      if (this.formItens.valid) {
         this.item = this.formItens.value;

         for (let p of this.produtos) {
            if (p.id == this.formItens.value.produto) {
               this.item.produto = p;
            }
         }

         this.itens.push(this.item);
         this.item.produto.qtdEstoque -= this.item.quantidade;
         this.calcularTotal();
         this.formItens.reset();
      }
   }

   removerItem(item: Item): void {
      console.log(item);
      this.itens.splice(this.itens.indexOf(item), 1);
      this.item = item;
      this.item.produto.qtdEstoque += this.item.quantidade;
      this.calcularTotal();
   }

   salvar(): void {
      if (this.formPedido.valid && this.itens.length > 0) {
         this.pedido = this.formPedido.value;
         this.pedido.localEntrega = this.formPedido.value.localEntrega;
         this.pedido.itens = this.itens;

         for (let c of this.clientes) {
            if (c.id == this.formPedido.value.cliente) {
               this.pedido.cliente = c;
            }
         }

         this.pedidoService.incluir(this.pedido).subscribe(retorno => {
            alert('Pedido adicionado!');
            console.log(retorno);
         });

         this.formPedido.reset();
         this.formItens.reset();
         this.itens.splice(0, this.itens.length);
      }
   }
}
