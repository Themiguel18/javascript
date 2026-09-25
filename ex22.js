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






/*function multiplicar(n){



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
