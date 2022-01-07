import { Produto } from "./produto";

export class Item {

   constructor(
      public id?: number,
      public produto?: Produto,
      public valorSomatorio?: number,
      public quantidade?: number,
      public dataValidade?: Date
   ) {}
}
