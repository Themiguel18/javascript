let tarefa = document.getElementById('tarefa')
let lista = document.getElementById('lista')
function adicionar(){
   
    if(tarefa.value.length == 0){
        alert('Digite a tarefa seu palhaço')
    }else{
        let valor = String(tarefa.value)
        let item = document.createElement('li')
        item.textContent = valor
        
        let remover = document.createElement('button')
        remover.textContent = 'Remover'
        
        remover.onclick = function(){
            item.remove()
        }
        lista.appendChild(item)
        item.appendChild(remover)
      

        
    }
}