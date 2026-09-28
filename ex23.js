/*function* gerarNumeros(n){
    for(let c= 0; c <= n; c++){
        yield c
    }
}

function analisar(n){
    let resultado = [...gerarNumeros(6)].map(valor => {
        if(valor%2==0){
            return valor*2
        }else{
            return valor*3
        }
    })
    return resultado

}
console.log(analisar(6).join(' '))




function* gerarPrecos(){
    let precos = [1000, 2500, 3500, 4500, 5000]
    for(let v of precos){
        yield v
    }
    
}

function desconto(){
    let resultado = [...gerarPrecos()].map(i => i-(i*0.10))
    return resultado
}
console.log(desconto())

function* gerarPares(n){
    for(let c = 0; c <= n; c++){
        yield c
    }
}

function processarPares(n){
    let resultado = [...gerarPares(10)].map(i=>{if(i%2==0){
        return 'par'
    }else{
        return 'impar'
    }})
    return resultado
}
console.log(processarPares(10).join(' '))



function* gerarNumeros(n){
    for(let c = 1; c <= n; c++){
        yield c
    }
}
function processarNumeros(n){
       let resultado = [...gerarNumeros(10)].map(valores => valores**2)
        return resultado
        
    }
    console.log(processarNumeros(10).join(' '))*/
