export class Produto {

   public id: number;
   public descricao: string;
   public precoUnitario: number;
   public unidadeMedida: string;
   public qtdEstoque: number;

   constructor(id?: number, descricao?: string, precoUnitario?: number, unidadeMedida?: string, qtdEstoque?: number) {
      this.id = <number>id;
      this.descricao = <string>descricao;
      this.precoUnitario = <number>precoUnitario;
      this.unidadeMedida = <string>unidadeMedida;
      this.qtdEstoque = <number>qtdEstoque;
   }
}

