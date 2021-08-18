const dadosDocliente = {
    name:'Daniel',
    age: 43,
    cpf:'27686974863',
    email:'dev.obe78@gmail.com',
    phones: ['(11)94867-6534','(15)94867-6534','(19)94867-6534','(13)94867-6534']
} 
    dadosDocliente.phones.forEach(indice => console.log(indice))

    dadosDocliente.phones = '(21)94867-6534'
    console.log(dadosDocliente)