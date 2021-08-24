function Cliente (nome, cpf, email, saldo) {
    this.nome = nome 
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}
function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldoPoup)
    this.saldoPoup = saldoPoup
}

const novoCliente = new clientePoupanca('Sonobe', '333.444.555-66','sonobe@gmail.com', 1500, 3000)
console.log(novoCliente)

clientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

novoCliente.depositarPoup(2980)
console.log(novoCliente.saldoPoup)



/*Saiba Mais - 
O Javascript é uma linguagem que a partir do ES2015 possibilitou o trabalho com classes para quem 
desenvolve em outras linguagens. Porém, ainda permanece sendo baseada em protótipos.
Será que conseguimos utilizar herança com protótipos?
A resposta é: Sim. Para tratar a herança com protótipos podemos criar uma cadeia em que um protótipo 
acessa o outro de um nível superior e assim por diante. E aí? Vamos praticar? Como fizemos no vídeo, 
escreva uma função construtora para criar um novo cliente. */