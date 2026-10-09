/*const produtos=[
    {nome: 'Caderno', preco: 1000},
    {nome: 'Caneta', preco: 500},
    {nome: 'Mochila', preco: 8000},
    {nome: 'Livro', preco: 4500}
]

const menoDe10000=produtos.every((el)=>{
    return el.preco<10000
})

console.log(menoDe10000)




const numeros=[5,10,15,-20,25];

const positivos=numeros.every((el,p)=>{
   
    return el>0 
    
})

console.log(positivos)




const produtos=[
    {nome: 'Teclado', preco: 5000},
    {nome: 'Rato', preco: 2500},
    {nome: 'Monitor', preco: 45000},
    {nome: 'Headset', preco: 8000}
]

const inferior=produtos.find((el)=>{
    return el.preco<6000
})

console.log(inferior)

 




const numero=[4,7,12,15,20,25]
const enc=numero.find((e)=>{
    return e>10
})

console.log(enc)


const p_array = document.querySelector('#array')
const btn_verificar=document.querySelector('#btnVerificar')
const resultado=document.querySelector('#resultado')

const elementos_array=[21,25,19,20,16,18,22]

p_array.innerHTML='['+elementos_array+']'

btn_verificar.addEventListener('click',(evt)=>{
    const returno=elementos_array.every((e,p)=>{
        if(e<18){
            resultado.innerHTML='Array nao conforme na posicao '+p
        }
        
        return e>=18
    })
    if(returno){
        resultado.innerHTML='Ok'
    }
     console.log(returno)

})






















/*const produtos=[
    {nome: 'teclado', preco: 15000, categoria:'perifericos',emstock:true},
    {nome: 'Monitor', preco: 85000, categoria:'ecras',emstock:false},
    {nome: 'Rato', preco: 600, categoria:'perifericos',emstock:true},
    {nome: 'portatil', preco: 350000, categoria:'computadores',emstock:true},
    {nome: 'webcam', preco: 22000, categoria:'perifericos',emstock:false},
]
const stock=produtos.filter((produtos)=>{
    return produtos.emstock===true
})

const perifericos=produtos.filter((produtos)=>{
    return produtos.categoria==='perifericos'
})

const precos=produtos.filter((produtos)=>{
    return produtos.preco>10000 && produtos.preco<100000
})

const menos=produtos.filter((produtos)=>{
    return produtos.emstock===true && produtos.preco<20000
})

// console.log(stock)
// console.log(perifericos)
// console.log(precos) 
console.log(menos)


const palavras=['casa','programaao','js','desenvolver','web']
const maisDe5=palavras.filter((el)=>el.length>5)
console.log(maisDe5)


const nomes=['Ana', '', 'Carlos','','Maria']
const nomesVazios=nomes.filter((n)=>n!=='')

console.log(nomesVazios)

const maiore=[12,78,45,90,33,51,8]
const maioresQue50=maiore.filter((el)=>el>50)
console.log(maioresQue50)

const numeros = [1,2,3,4,5,6,7,8,9,10]
const pares = numeros.filter((el)=>el%2===0)

console.log(pares)*/

