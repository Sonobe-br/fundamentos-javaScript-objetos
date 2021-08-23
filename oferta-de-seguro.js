const custumerData = {
    name:'Daniel',
    age:43,
    dateBorn:'27/05/1978',
    cpf:'27686974863',
    email:'dev.obe78@gmail.com',
    phones:['(11)94867-6534','(15)94867-6534'],
    
    dependents:[
        {
            name:'Anita Fratelli Sonobe Silveira',
            age:13,
            kinship:'daughter',
            dateBorn:'08/05/2008',
            phones:'(13)94867-6534'
        },

        {
            name:'Pedro Fratelli Sonobe Silveira',
            age:10,
            kinship:'son',
            dateBorn:'17/03/2011',
            phone:'(19)94867-6534'
        }
    ],
    balanceAvaliable:100,
    cashDeposit:function(value){
        this.balanceAvaliable += value
    }     
}
 //método .keys
function oferecerSeguro(obj){
    const propsClients = Object.keys(custumerData);
    if(propsClients.includes('dependents')){
        console.log(`Oferta de seguro de vida aprovada para ${obj.name}`)
    }
} 
oferecerSeguro(custumerData)
console.log(Object.values(custumerData))
console.log(Object.entries(custumerData))