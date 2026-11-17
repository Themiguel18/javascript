const f_tipoMilitar=document.getElementById('f_tipoMilitar')
const f_tipoNormal=document.getElementById('f_tipoNormal')
const f_blindagem=document.getElementById('f_blindagem')
const f_municao=document.getElementById('f_municao')
const carros=document.getElementById('carros')
const btn_addCarros=document.getElementById('btn_addCarros')

let a_carros=[]

f_tipoMilitar.addEventListener('click',(evt)=>{
    console.log('teste')
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')

})
f_tipoNormal.addEventListener('click',(evt)=>{
    console.log('teste')
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
})

const gerenciarCarros=()=>{
    carros.innerHTML=''
    a_carros.forEach((c)=>{
        const div=document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML=c.nome
        carros.appendChild(div)
    })
}

btn_addCarros.addEventListener('click', ()=>{
    if(f_tipoNormal.checked){
        const c=new Carro('Normal', 4)
    }
    gerenciarCarros()
})

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
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor('verde')
    }
    atira=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1=new Carro('Militar', 4)
c1.ligar()
c1.setCor('preto')

const c2=new Militar('Lutador', 1, 100, 50)

c2.atira()
c2.atira()
c2.atira()
c2.atira()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${(c1.portas? "sim": 'Nao')}`)
console.log(`Ligado: ${(c1.ligado)}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log('-------------------------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${(c2.portas? "sim": 'Nao')}`)
console.log(`Ligado: ${(c2.ligado)}`)
console.log(`Blindagem: ${(c2.blindagem)}`)
console.log(`Municao: ${(c2.municao)}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`cor: ${c2.cor}`)
console.log('-------------------------------------') 