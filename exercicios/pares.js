let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let txt = document.getElementById('res')

function analisar(){
    if(numero.value.length == 0){
        alert('Digite alguma coisa seu palhaço')
    }else{
        let valor = Number(numero.value)
        let item = document.createElement('option')
        item.textContent = valor
        lista.appendChild(item)
        let impares = 0
        let pares = 0
        for( let p of lista.options){
            let v = Number(p.value)
            if(v%2==0){
                pares ++
            }else{
                impares ++
            }

        }txt.innerHTML = `Os pares são ${pares} e os ímpares são ${impares}`
    }
}