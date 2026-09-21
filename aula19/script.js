function cambio(){
    let moeda = document.getElementById('pais')
    let troca = document.getElementById('pais2')
    let valor = document.getElementById('m1')
    let resultado = document.getElementById('res')
    let v = Number(valor.value)
    if(valor.value.length == 0){
        alert('Digite a moeda seu palhaço')
    }else if((moeda.value === 'angola') && (troca.value === 'europa')){
        let conversao = v * 0.00108932
        resultado.innerHTML = `${v}kz é ${conversao}EUR`

    }else if((moeda.value === 'angola') && (troca.value === 'brasil')){
        let conversao = v * 0.00556569
        resultado.innerHTML = `${v}kz é ${conversao}BRL`        

    }

       
}