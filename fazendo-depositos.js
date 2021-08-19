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
    cashDeposit:function(value) {
        this.balanceAvaliable += value
    }     
}
/* solicitei a saída através do console.log onde o objeto através do método notação de ponto, 
acessa a propriedade da variável saldo da conta(balanceAvaliable) que retona o valor de 100. */ 
console.log(custumerData.balanceAvaliable)
//o objeto por intermédio do método notação de ponto (.) atribui um valor para a função cashDeposit.  
custumerData.cashDeposit(30)
//o objeto acessa a propriedade da váriavel saldo da conta por meio do método notação de ponto.
console.log(custumerData.balanceAvaliable)
