const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}
/* const guerreiros = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiros) */

/* Aqui entramos com o spread operator, adicionando a sintaxe de três pontos (reticências) 
antes do nome de cada objeto literal, com cada objeto separado por vírgula: */
const guerreiros = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiros)
//...
const mago = {
   nome: "Gandalf",
   classe: "mago"
}
const guerreiro = {
   nome: "Aragorn",
   classe: "guerreiro"
} 
const ranger = {
   nome: "Legolas",
   classe: "ranger"
}
/* Os três objetos acima têm as mesmas propriedades. O JavaScript sobrescreveu as chaves com o mesmo 
nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto 
personagens. */
const personagens = { ...mago, ...guerreiro, ...ranger }
//console.log(personagens)
//...