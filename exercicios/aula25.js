const caixa1 = document.getElementById('caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos= ['HTML','CSS','JavaScript','REACT','NodeJS','PHP','C++']

cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c' + chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el
    const btn_c = document.createElement('img ')
    btn_c.setAttribute('src','lixo.png')
    btn_c.setAttribute('alt','Remover')
    btn_c.addEventListener('click',(eve)=>{
        caixa1.removeChild(eve.target.parentNode)
    })
    novoElemento.appendChild(btn_c)
    caixa1.appendChild(novoElemento)
})
    
caixa1.appendChild(novoElemento)

 

