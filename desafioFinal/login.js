const btn_login=document.querySelector('#btn_login')
const btn_next=document.querySelector('#btn_next')
const email=document.querySelector('#email')
btn_next.addEventListener('click',(val)=>{
    if(email.value.length==0){
        alert('Digite o seu email')
    }else{
        let nome=email.value
        
    }
    
})

