class Carro{ // Classe pai
    constructor(nome, portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{

}

const c1=new Carro('Militar', 4)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas? "sim"}`)
console.log(`Ligado: ${(c1.ligado)}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)