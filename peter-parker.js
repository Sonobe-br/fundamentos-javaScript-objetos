const PeterParker = {
    nomeCompleto:'Peter Benjamin Parker',
    heroi:'Homem Aranha',
    codinomeConhecido:'amigo da vizinhaça',
    terraNatal:'Queens, Nova Iorque',
    especie:'humano geneticamente modificado',
    ocupacao:'herói,estudante,inventor,fotografo,vigilante,cientista(formado em biofísica e bioquímica) e CEO das Indústrias Parker',
    afiliacoes:'Clarim Diário,Vingadores,Novos Vingadores,Fundação Futuro,Defensores,Novo Quarteto Fantástico,Heróis de Aluguel,Vingadores Secretos,Instituto Jean Grey,Indústrias Parker',
    primeiraAparicao:'Amazy Fantasy, agosto de 1962',
    ultimaAparicao:'Vingadores Ultimato',
    criadores:'Stan Lee, Steve Ditko',
    genero:'Masculino',
    baseOperacional:'Nova Iorque',
    familia:'Richard Parker (pai Falecido), Mary Parker (mãe falecida), Benjamin Parker (tio falecido), May Parker (tia), Mary Jane Watson (esposa)',
    inimigo:'Duende Verde (arqui-inimigo), Doutor Octopus, Venom, Homem Areia'
}
console.log(PeterParker)
delete PeterParker.heroi
console.log(PeterParker)
PeterParker.heroi='SpiderMan'
console.log(PeterParker)

//objeto em array com acesso a chave por indice. 
const keys = ['nomeCompleto','codinomeConhecido','terraNatal','especie','ocupação','afiliacoes']
console.log(PeterParker[keys[3]])

//acessando chaves por meio de uma função
keys.forEach(hq => console.log(PeterParker[hq]))
console.log(PeterParker['terraNatal'])
console.log(PeterParker['ocupacao'])