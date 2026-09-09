function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('ERROR')
    }else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'menino.jpg')
                res.innerHTML = `Detectamos um menino com ${idade} anos`
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'jovem homem.jpg')
                res.innerHTML = `Detectamos um jovem com ${idade} anos`
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'adulto.jpg')
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
            }else{
                // Idoso
                img.setAttribute('src', 'idoso.jpg')
                res.innerHTML = `Detectamos um idoso com ${idade} anos`
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
            }else if(idade < 21){
                // Jovem
            }else if(idade < 50){
                // Adulto
            }else{
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        
        res.appendChild(img)
    }
}