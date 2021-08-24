function Cliente (nome, cpf, email, saldo) {
    this.nome = nome 
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}
const Daniel = new Cliente ('Daniel', '222.333.444-55', 'dev.obe78@gmail.com', 8000)
console.log(Daniel)
