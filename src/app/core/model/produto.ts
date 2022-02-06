export class Produto {

   public id: number;
   public descricao: string;
   public precoUnitario: number;
   public unidadeMedida: string;
   public qtdEstoque: number;
   public arquivado: boolean;

   constructor(id?: number, descricao?: string, precoUnitario?: number, unidadeMedida?: string, qtdEstoque?: number, arquivado?: boolean) {
      this.id = <number>id;
      this.descricao = <string>descricao;
      this.precoUnitario = <number>precoUnitario;
      this.unidadeMedida = <string>unidadeMedida;
      this.qtdEstoque = <number>qtdEstoque;
      this.arquivado = <boolean>arquivado;
   }
}

