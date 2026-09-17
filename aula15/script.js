let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function n1(n){
    if(n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
   

}

function i(n, l){
    if(i.indexOf(n) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){
    let numero = Number(num.value)
    let l = Number(lista.value)
    if(n1(numero) && !i(numero, valores)){
        alert('Tudo ok')

    }else{
        alert('Valor incorreto ou já encontrado na lista')
    }
}
