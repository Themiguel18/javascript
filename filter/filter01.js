


const idade = [15,21,30,17,18,44,12,50]
const maior=idade.filter((valor, indice, array)=>{
    if(valor>=18)
        return valor

})
const menor=idade.filter((valor, indice, array)=>{
    if(valor<18)
        return valor

})

console.log(idade)
console.log(maior)
console.log(menor)
