import { Cliente } from "./cliente";
import { Item } from "./item";

export class Pedido {
   public id!: number;
   public cliente!: Cliente;
   public itens!: Array<Item>;
   public dataPedido!: Date;
   public prazoEntrega!: Date;
   public dataEntrega!: Date;
   public valorTotal!: number;
   public status!: string;
}
