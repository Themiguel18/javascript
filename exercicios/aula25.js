const caixa1 = document.getElementById('caixa1')

const curso = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt)=>{
    console.log('Clicou')
})


curso.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })  
})
 