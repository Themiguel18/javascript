function converter(){
    let v1 = document.getElementById('m1')
    let txt = document.getElementById('res')
    if(v1.value.length == 0){
        alert('Preencha o input seu palhaço')
    }else{
        let n1 = Number(v1.value)
        let form = (n1 * 9/5) + 32
        txt.innerHTML = `${n1}º é igual à ${form}º em fahrenheit`
        
    }
}