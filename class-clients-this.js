const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
}
   
   pessoa.imprimeNome()
   function imprimeNomeEmail(){
        console.log(`nome: ${this.nome}, email ${this.email}`)
    }   

    const pessoa1 = {
        nome: "Ana",
        email: "a@email.com",
        imprimeInfo: imprimeNomeEmail
    }
       
       const pessoa2 = {
        nome: "Paula",
        email: "p@email.com",
        imprimeInfo: imprimeNomeEmail
    }
       
       pessoa1.imprimeInfo()
       //nome: Ana, email a@email.com
       pessoa2.imprimeInfo()
       //nome: Paula, email p@email.com

       function Pessoa(nome, email){
        this.nome =nome
        this.email =email
        this.imprimeNomeEmail = function(){
            console.log(`nome: ${this.nome}, email: ${this.email}`)
        }
    }

   