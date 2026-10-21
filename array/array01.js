const valor1=document.querySelector('#valor1')
const valor2=document.querySelector('#valor2')
const res=document.querySelector('#res')
const botoes=[...document.querySelectorAll('.operador')]

 

    botoes.map((el)=>{

        
      el.addEventListener('click',(evt)=>{
        if(valor1.value.length==0 || valor2.value.length==0){
          alert('Digite os valores ')
        }else{
        let numero1=Number(valor1.value)
        let numero2=Number(valor2.value)
        
        if(evt.target==botoes[0]){
            res.innerHTML=numero1+numero2
        }else if(evt.target==botoes[1]){
          res.innerHTML=numero1-numero2
        }else if(evt.target==botoes[2]){
          res.innerHTML=numero1*numero2
        }else{
          res.innerHTML=numero1/numero2
        }

        }
      
      })
    })
    
        


