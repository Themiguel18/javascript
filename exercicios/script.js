function mostrar(){
    let nome = document.getElementById('txt')
    let texto = document.getElementById('txt1')
   
    if(nome.value.length == 0){
        alert('Digite um nome seu desgraçado')
    }else{
        let n = String(nome.value)
        texto.innerHTML = 'Ola '+ n
    }
}