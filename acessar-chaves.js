const dadosDocliente = {
    nome:'Daniel',
    idade: 43,
    cpf:'27686974863',
    email:'dev.obe78@gmail.com'
} 

const chaves = ['nome', 'idade', 'cpf','email']
console.log(dadosDocliente[chaves[3]])

//for.Each é um método de array do javaScript
              //atribui info como parâmetro e o método forEach precisa de uma função callBack para funcionar.
chaves.forEach(info => console.log(dadosDocliente[info]))

//quando sabemos o nome da chave que desejamos acessar podemos chamar da seguinte forma:
console.log(dadosDocliente['idade'])