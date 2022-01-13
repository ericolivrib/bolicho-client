import { Produto } from "./produto";

export class Item {

   public id: number;
   public produto: Produto;
   public quantidade: number;
   public subtotal: number;
   public dataValidade: Date;

   constructor(id?: number, produto?: Produto, quantidade?: number, subtotal?: number, dataValidade?: Date) {
      this.id = <number>id;
      this.produto = <Produto>produto;
      this.quantidade = <number>quantidade;
      this.subtotal = <number>subtotal;
      this.dataValidade = <Date>dataValidade;
   }
}
