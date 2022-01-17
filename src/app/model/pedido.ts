import { Cliente } from "./cliente";
import { Item } from "./item";
import { Endereco } from "./endereco";

export class Pedido {

   public id: number;
   public numPedido: string;
   public cliente: Cliente;
   public itens: Item[];
   public enderecoEntrega: Endereco;
   public dataPedido: Date;
   public dataEntrega: Date;
   public dataFinalizado: Date;
   public valorTotal: number;
   public status: string;

   constructor(id?: number, numPedido?: string, cliente?: Cliente, itens?: Item[], enderecoEntrega?: Endereco, dataPedido?: Date, dataEntrega?: Date, dataFinalizado?: Date, valorTotal?: number, status?: string) {
      this.id = <number>id;
      this.numPedido = <string>numPedido;
      this.cliente = <Cliente>cliente;
      this.itens = <Item[]>itens;
      this.enderecoEntrega = <Endereco>enderecoEntrega;
      this.dataPedido = <Date>dataPedido;
      this.dataEntrega = <Date>dataEntrega;
      this.dataFinalizado = <Date>dataFinalizado;
      this.valorTotal = <number>valorTotal;
      this.status = <string>status;
   }
}
