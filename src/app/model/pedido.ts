import { Cliente } from "./cliente";
import { Item } from "./item";
import { Endereco } from "./endereco";

export class Pedido {

   public id: number;
   public numPedido: string;
   public cliente: Cliente;
   public itens: Item[];
   public localEntrega: Endereco;
   public dataPedido: Date;
   public dataEntrega: Date;
   public dataFinalizado: Date;
   public total: number;
   public status: string;

   constructor(id?: number, numPedido?: string, cliente?: Cliente, itens?: Item[], localEntrega?: Endereco, dataPedido?: Date, dataEntrega?: Date, dataFinalizado?: Date, total?: number, status?: string) {
      this.id = <number>id;
      this.numPedido = <string>numPedido;
      this.cliente = <Cliente>cliente;
      this.itens = <Item[]>itens;
      this.localEntrega = <Endereco>localEntrega;
      this.dataPedido = <Date>dataPedido;
      this.dataEntrega = <Date>dataEntrega;
      this.dataFinalizado = <Date>dataFinalizado;
      this.total = <number>total;
      this.status = <string>status;
   }
}
