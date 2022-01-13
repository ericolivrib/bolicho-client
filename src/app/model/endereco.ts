export class Endereco {

   public id: number;
   public cep: string;
   public bairro: string;
   public logradouro: string;
   public numero: number;
   public complemento: string;
   public pontoReferencia: string;

   constructor(id?: number, cep?: string, bairro?: string, logradouro?: string, numero?: number, complemento?: string, pontoReferencia?: string) {
      this.id = <number>id;
      this.cep = <string>cep;
      this.bairro = <string>bairro;
      this.logradouro = <string>logradouro;
      this.numero = <number>numero;
      this.complemento = <string>complemento;
      this.pontoReferencia = <string>pontoReferencia;
   }
}
