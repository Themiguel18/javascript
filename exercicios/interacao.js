function calcular() {

    var num1 = document.getElementById('n1')
    var num2 = document.getElementById('n2')
    var o = document.getElementById('op').value
    var resultado = document.getElementById('res')
    let v1 = Number(num1.value)
    let v2 = Number(num2.value)

   if(o == '+'){
        let result = v1 + v2
        resultado.innerHTML = `${v1} + ${v2} = ${result}`
   }else if(o == '-'){
        let result = v1 - v2
        resultado.innerHTML = `${v1} - ${v2} = ${result}`
   }else if(o == '*'){
        let result = v1 * v2
        resultado.innerHTML = `${v1} x ${v2} = ${result}`
   }else{
        let result = v1 / v2
        resultado.innerHTML = `${v1} / ${v2} = ${result}`
   }
}