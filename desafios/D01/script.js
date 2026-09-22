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
     let r = 0
    for(let c of res.options){
        let numero = Number(c.textContent)
        r += numero
        

    }txt.innerHTML = `A soma de todos e ${r}`

    let maior = res.options[0]
    if(maior < res.options){
        maior = res.options
    }txt.innerHTML = `O maior numero e ${maior}`
}