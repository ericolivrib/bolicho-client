export class Usuario {

   public id: number;
   public email: string;
   public senha: string;

   constructor(id?: number, email?: string, senha?: string) {
      this.id = <number>id;
      this.email = <string>email;
      this.senha = <string>senha;
   }
}
