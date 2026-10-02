const tarefa = document.getElementById('tarefa')
const button = document.getElementById('button')
const lista = document.getElementById('lista')

button.addEventListener('click', ()=>{
    if(tarefa.value.length == 0){
        alert('Digite uma tarefa')
        return
    }
    const li = document.createElement('li')
    li.setAttribute('class', 'item')
    li.innerHTML = tarefa.value
    li.addEventListener('click', ()=>{
        li.remove(li)
    })
    lista.appendChild(li)
})