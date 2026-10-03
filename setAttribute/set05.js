const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const button = document.getElementById('button')

 button.addEventListener('click', () => {
    caixa2.textContent = caixa1.textContent
    caixa1.appendChild(caixa2.cloneNode(true))
 })