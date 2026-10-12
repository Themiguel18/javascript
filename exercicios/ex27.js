const caixa=document.querySelector('#caixa')

let cursos=['HTML','CSS','JavaScript']
cursos.map((el)=>{
    let elementos=document.createElement('p')
    elementos.textContent=el
    caixa.appendChild(elementos)
    console.log(elementos)

})
