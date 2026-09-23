let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
function mostreMenor(){
    if(numero.value.length == 0){
        alert('Digite um valor seu palhaço')
    }else{
        let valor = Number(numero.value)
        let item = document.createElement('option')
        item.textContent = valor
        lista.appendChild(item)
        let menor = Infinity
        for(let p of lista.options){
            let v = Number(p.value)
            if(v < menor){
                menor = v
            }
        }res.innerHTML = `O menor número digitado é ${menor}`



    }
}