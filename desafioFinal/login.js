const btn_login=document.querySelector('#btn_login')
const btn_next=document.querySelector('#btn_next')
const email=document.querySelector('#email')
const pais=document.querySelector('#pais')

const arr=['Angola','Brasil','Argentina']

const item=arr.map((el)=>{
    const items=document.createElement('option')
        items.textContent=el
        pais.appendChild(items)
        return items
    
})


btn_next.addEventListener('click',(val)=>{
    let emailGuardado='joselucianoatutu@gmail.com'
    if(email.value.length==0){
        alert('Digite o seu email')
    }else if(email.value != emailGuardado){
        alert(' Email errado')
         
    }
   
    
})

