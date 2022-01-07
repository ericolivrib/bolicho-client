export class Produto {

   constructor(
      public id?: number,
      public descricao?: string,
      public precoUnitario?: number,
      public unidadeMedida?: string,
      public qtdEstoque?: number
   ) {}
}
