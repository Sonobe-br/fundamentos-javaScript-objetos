const dadosDocliente = {
    name:'Daniel',
    age: 43,
    cpf:'27686974863',
    email:'dev.obe78@gmail.com',
    phones: ['(11)94867-6534','(15)94867-6534','(19)94867-6534','(13)94867-6534']
} 

dadosDocliente.dependente = {
    nome:'Anita',
    parentesco:'filho',
    dataNascimento:'08/05/2008'
}
console.log(dadosDocliente)

//alterando a propriedade nome
dadosDocliente.dependente.nome ='Anita Fratelli Sonobe Silveira'
console.log(dadosDocliente) 