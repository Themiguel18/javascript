function* frequenciaFebonatti(){
    let res = 0
    let atual = 1
    for(let c = 0; c<=Infinity; c++){
        let proximo = res+atual
        res++
        atual++
        yield proximo
    }
}

let itf = frequenciaFebonatti()
console.log(itf.next().value)
console.log(itf.next().value)
console.log(itf.next().value)
console.log(itf.next().value)
console.log(itf.next().value)



/*function* paresInfinito(){
  
        for(n=0; n<=Infinity; n++){
              if(n%2==0){
            yield n
        }
    }
}

let itp = paresInfinito()
console.log(itp.next().value)
console.log(itp.next().value)
console.log(itp.next().value)
console.log(itp.next().value)



function* contarAte(limite){
    
    for(let c=0; c<=limite; c++){
        yield c
    }
}

let itc = contarAte(10)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)


function criarConta(saldoInicial){
    let guadarSaldo = saldoInicial
    return {
        depositar(valor){
            guadarSaldo += valor
             return guadarSaldo
        },

        verSaldo(){
            return guadarSaldo
        }
    }
}

let conta = criarConta(500)
console.log(conta.verSaldo())
console.log(conta.depositar(200))
console.log(conta.depositar(200))
console.log(conta.verSaldo())






function multiplicar(n){



    return function multiplica(n1){
       
        return n*n1
    }    
    
}

let multiplicador = multiplicar(3)
console.log(multiplicador(3))



 function criarContador(){
   let c = 0
     return function cn(){
         c++
         return c
        
     }
 }
 let contador = criarContador()
 console.log(contador())*/
