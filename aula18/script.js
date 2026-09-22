// Arrow functions

function maiorNumero(...numeros){
    let maior = numeros[0]
    for(let v of numeros){
        if(v > maior){
            maior = v
        }
    }
    return maior

}
console.log(maiorNumero(2, 4, 48, 49))