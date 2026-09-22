let numeros = document.getElementById('numeros')
let res = document.getElementById('res')
let txt = document.getElementById('txt')
function analisar(){
    if(numeros.value.length == 0){
        alert('Digite uma cena palhaço')
        return
    }else{
        let valor = Number(numeros.value)
        let item = document.createElement('option')
        item.textContent = valor
        res.appendChild(item)

    }


    
}

function resultado(){
    let soma = 0
    let maior = -Infinity
    for(let c of res.options){
        soma += Number(c.value)
        let n = Number(c.value)
        if(n > maior){
            maior = n
        }
    }txt.innerHTML = `Soma dos valores = ${soma} <br> Maior = ${maior} <br> Digitou ${res.length}`

    
}
