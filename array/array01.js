const valor1=document.querySelector('#valor1')
const valor2=document.querySelector('#valor2')
let operar=document.querySelector('#operar')
const res=document.querySelector('#res')
const botoes=[...document.querySelectorAll('.operador')]

    botoes.map((el)=>{
        
      el.addEventListener('click',(evt)=>{
        let numero1=Number(valor1.value)
        let numero2=Number(valor2.value)
        if(evt.target==botoes[0]){
            res.innerHTML=numero1+numero2
        }
      })
    })
    
        


