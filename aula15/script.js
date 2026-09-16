let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function numer(){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function list(){
    if(i.indexOf(Number(n) != -1)){
        return true
    }else{
        return false
    }

}
function adicionar(){
    if(numer(num.value) && list(lista.value.valores)){
        alert('Tudo ok')

    }else{
        alert('Valor incorreto ou já encontrado na lista')
    }
}