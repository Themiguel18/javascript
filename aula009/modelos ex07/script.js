function contar() {

    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var salto = Number(document.getElementById('salto').value)

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = ''

    if (salto <= 0) {
        resultado.innerHTML = 'O salto deve ser maior que 0!'
        return
    }

    if (inicio < fim) {

        for (var i = inicio; i <= fim; i += salto) {
            resultado.innerHTML += i + ' 👉 '
        }

    } else {

        for (var i = inicio; i >= fim; i -= salto) {
            resultado.innerHTML += i + ' 👉 '
        }
    }
}