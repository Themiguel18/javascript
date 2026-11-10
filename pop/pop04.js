const curso=[...document.querySelectorAll('.curso')];
const btn=document.querySelector('#btn');

btn.addEventListener('click',()=>{
    curso.pop()
})