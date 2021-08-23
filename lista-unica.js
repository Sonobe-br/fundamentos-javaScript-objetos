const clientes = [{
    name:'Daniel',
    age:43,
    dateBorn:'27/05/1978',
    cpf:'27686974863',
    email:'dev.obe78@gmail.com',
    phones:['(11)94867-6534','(15)94867-6534'],
    
    dependents:[{
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
        },
        {
            name:'Minéa Fratelli',
            age:40,
            kinship:'ex-esposa',
            dateBorn:'20/09/1979',
            phone:['(40)94867-6534'],
        },
        {    
            name:'Carolina B. Silveira',
            age:22,
            kinship:'friend',
            dateBorn:'08/10/1998',
            phones:'(58)94867-6534'   
        }],
    }
]
const listaDependentes = [...clientes[0].dependents]
console.log(listaDependentes)
console.table(listaDependentes)
