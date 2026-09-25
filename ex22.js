function multiplicar(n){
    n = 3
    let m = n
    return function multiplica(){
        let mult = m*5
        return mult
    }    
    
}

let multiplicador = multiplicar()
console.log(multiplicador())



// function criarContador(){
//     let c = 0
//     return function cn(){
//         c++
//         return c
        
//     }
// }
// let contador = criarContador()
// console.log(contador())
