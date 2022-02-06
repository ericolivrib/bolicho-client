export class Usuario {

   public email: string;
   public senha: string;
   public token: string;

   constructor(email?: string, senha?: string, token?: string) {
      this.email = <string>email;
      this.senha = <string>senha;
      this.token = <string>token;
   }
}
