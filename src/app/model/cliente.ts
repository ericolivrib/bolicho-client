import { Endereco } from "./endereco";

export class Cliente {

   constructor(
      public id: number,
      public nome: string,
      public email: string,
      public telefone: string,
      public cpf: string,
      public ativo: boolean,
      public endereco: Endereco
   ) {}
}
