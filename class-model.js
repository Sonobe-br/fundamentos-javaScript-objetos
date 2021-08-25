class AparelhoMobible {
    constructor (fabricante, modelo, serie, valor, info){
        this.fabricante = fabricante
        this.modelo = modelo
        this.serie = serie
        this.valor = valor
        this.info = info
    } 

    apresentarRelatorio (descricao){
        this.info += descricao
    }

   /*  exibirRelatorio() {
        console.log(this.info)
    } */
            
} 
const mobile = new AparelhoMobible ('Apple Inc', 'smartphone', 'iphone43', '2705.78', 'lançado em 1978' )
console.log(mobile)
