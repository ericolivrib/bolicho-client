import { Cliente } from "./cliente";
import { Item } from "./item";
import { LocalEntrega } from "./local-entrega";

export class Pedido {

   public id: number;
   public cliente: Cliente;
   public itens: Item[];
   public localEntrega: LocalEntrega;
   public dataPedido: Date;
   public dataEntrega: Date;
   public total: number;
   public status: string;

   constructor(id?: number, cliente?: Cliente, itens?: Item[], localEntrega?: LocalEntrega, dataPedido?: Date, dataEntrega?: Date, total?: number, status?: string) {
      this.id = <number>id;
      this.cliente = <Cliente>cliente;
      this.itens = <Item[]>itens;
      this.localEntrega = <LocalEntrega>localEntrega;
      this.dataPedido = <Date>dataPedido;
      this.dataEntrega = <Date>dataEntrega;
      this.total = <number>total;
      this.status = <string>status;
   }
}
