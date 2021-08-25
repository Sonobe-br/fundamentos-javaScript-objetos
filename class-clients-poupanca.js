class Client {
    constructor (nome, cpf, email, saldo) {
        this.nome = nome 
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    } 
    depositarPoupanca (valor) {
        this.saldo += valor          
    } 
    exibirRelatorio() {
        console.log(this.saldo)
    }
}
//a nova classe abaixo vai herdar as propriedades da classe acima pelo método 'extends'.
class ClientPoupanca extends Client {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca (valor) {
        this.saldoPoupanca += valor
    }
}

const Daniel = new ClientPoupanca ('Daniel Sonobe Silveira', '222.333.444-55', 'dev.obe78@gmail.com', '5000', '10000')
console.log(Daniel)

Daniel.depositarPoupanca(500) 
console.log(Daniel)
