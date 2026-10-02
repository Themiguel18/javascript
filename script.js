let inicio = document.querySelector('.inicio')
let destaque = document.querySelector('.destaque')

inicio.addEventListener('click', function() {
    destaque.classList.toggle('destaque')
    console.log(destaque.classList)
})  