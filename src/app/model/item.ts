import { Produto } from "./produto";

export class Item {

   constructor(
      public id: number,
      public produto: Produto,
      public subtotal: number,
      public quantidade: number,
      public dataValidade: Date
   ) {}
}
