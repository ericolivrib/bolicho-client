export class Endereco {

   constructor(
      public id?: number,
      public cep?: string,
      public bairro?: string,
      public logradouro?: string,
      public numero?: number,
      public complemento?: string,
      public pontoReferencia?: string
   ) {}
}
