const dadosDocliente = {
    nome:'Daniel',
    idade: 43,
    cpf:'27686974863',
    email:'dev.obe78@gmail.com'
} 
console.log(dadosDocliente)
dadosDocliente.fone = '11+9.4959-8790'
console.log(dadosDocliente)

dadosDocliente.fone = '+55 11 9.4959-7779'
console.log(dadosDocliente)

delete dadosDocliente.idade
console.log(dadosDocliente) 

dadosDocliente.minhaIdade = 43
console.log(dadosDocliente)