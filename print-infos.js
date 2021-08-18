const dadosDocliente = {
    nome:'Daniel',
    idade: 43,
    cpf:'27686974863',
    email:'dev.obe78@gmail.com'
} 
console.log(`Meu nome é ${dadosDocliente.nome} e tenho ${dadosDocliente.idade} anos de idade. Meu
CPF é ${dadosDocliente.cpf} e o meu e-mail para contato é ${dadosDocliente.email}`) 
//através da notação de ponto conseguimos acessar o valor da chave nome do nosso objeto.
console.log(dadosDocliente.cpf.substring(8,11))
//através do método substring, pedi para o javascript retornar somente os três últimos digitos do cpf. Obs.: Poderia ser os três primeiros digitos.

