const txt=document.getElementById("txt");
const remover=document.getElementById("remover");
const adicionar=document.getElementById('adicionar');
const lista=document.getElementById('lista');

adicionar.addEventListener('click',()=>{
    if(txt.value==""){
        alert("Digite um valor para adicionar na lista")
        return
    }
    const valor=String(txt.value)
    const novoElemento=document.createElement('li')
    novoElemento.setAttribute('class', 'item')
    novoElemento.textContent=valor
    lista.appendChild(novoElemento)
})

remover.addEventListener('click', ()=>{
    const itens=[...document.querySelectorAll('.item')]
    let removido=itens.pop()
    removido.remove()
})