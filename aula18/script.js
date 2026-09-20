function validar(){
    let s = document.getElementById('senha')
    if(s.value.length == 0){
        alert('Digite a senha seu palhaço')
    }else if(s.value.length < 8){
        alert('Caracteres insuficientes')
        
    }                                                                                                                                                                                                                                                                                                
}