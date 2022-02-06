export class Cliente {

   public id: number;
   public nome: string;
   public email: string;
   public telefone: string;
   public cpf: string;
   public ativo: boolean;

   constructor(id?: number, nome?: string, email?: string, telefone?: string, cpf?: string, ativo?: boolean) {
      this.id = <number>id;
      this.nome = <string>nome;
      this.email = <string>email;
      this.telefone = <string>telefone;
      this.cpf = <string>cpf;
      this.ativo = <boolean>ativo;
   }
}
