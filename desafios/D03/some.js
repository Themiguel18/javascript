const p_array = document.querySelector('#array')
const btn_verificar=document.querySelector('#btnReduzir')
const resultado=document.querySelector('#resultado')

const elementos_array=[1,2,3,4,5]

let aux = []

p_array.innerHTML='['+elementos_array+']'

btn_verificar.addEventListener('click',(evt)=>{
    resultado.innerHTML=elementos_array.reduce((an,ac,p)=>{
        aux.push(an)
        return an+ac
    })
    resultado.innerHTML+='<br/>'+aux
})


/*const p_array = document.querySelector('#array')
const btn_verificar=document.querySelector('#btnVerificar')
const resultado=document.querySelector('#resultado')

const elementos_array=[16,12,10,17,15,18,11]

p_array.innerHTML='['+elementos_array+']'

btn_verificar.addEventListener('click',(evt)=>{
    const returno=elementos_array.some((e,p)=>{
        if(e<18){
            resultado.innerHTML='Array nao conforme na posicao '+p 
        }
        
        return e>=18
    })
    if(returno){
        resultado.innerHTML='Ok'
    }

})*/



















