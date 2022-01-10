import { Produto } from "./produto";

export class Item {

   constructor(
      public id: number,
      public produto: Produto,
      public quantidade: number,
      public subtotal: number,
      public dataValidade: Date
   ) {}
}
