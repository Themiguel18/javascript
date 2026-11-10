const curso=[...document.querySelectorAll('.curso')];
const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
     let removido=curso.pop();        
     removido.remove();
})