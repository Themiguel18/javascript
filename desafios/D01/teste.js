let valores = [10, 20, 30, 40, 50]
let v = valores

for( v of valores){
    console.log(v)   
}
 let maior = v
 if(v > maior){
     maior = v
 }console.log(`O maior e ${maior}`)

 function soma(v1, v2, v3, v4, v5){
    let soma = valores
    let res = 0
    for(let s of soma){
        res += s
    }return res
 }console.log(soma(10, 20, 30, 40, 50))
