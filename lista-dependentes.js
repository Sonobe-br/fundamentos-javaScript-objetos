const custumerData = {
    name:'Daniel',
    age: 43,
    cpf:'27686974863',
    email:'dev.obe78@gmail.com',
    phones: ['(11)94867-6534','(15)94867-6534','(19)94867-6534','(13)94867-6534'],
    dependents: [{
        name:'Anita Fratelli Sonobe Silveira',
        kinship:'daughter',
        dateBorn:'08/05/2008'
    }]
}
custumerData.dependents.push({
    name:'Pedro Fratelli Sonobe Silveira',
    kinship:'son',
    dateBorn:'17/03/2011'  
})
console.log(custumerData)

const youngerDaughter = custumerData.dependents.filter(accessList => accessList.dateBorn==='08/05/2008')
console.log(youngerDaughter[0].name)

/* custumerData.dependents.name = 'Anita'
console.log(custumerData) */

custumerData.dependents.push({
    ageAnita:'13 year old',
    agePedro: '10 year old' 
})
console.log(custumerData)