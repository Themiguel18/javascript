const caixaCursos=document.querySelector('#caixaCursos')
const btn_c=[...document.querySelectorAll('.cursos')]
const c1_2=document.querySelector('#c1_2')
const cursos = ['HTML','CSS','JavaScript','React','MySQL','Java']
const btnRemoveCurso=document.getElementById('btnRemoverCurso')
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')

cursos.map((el,chave)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=el

    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)

})

const radioSelecionado =(eve)=>{
        const todosRadios=[...document.querySelectorAll('input[type=radio')]
        if(eve==undefined){
            alert('Digite uma cena palhaço')
        }
        const radioseleciondado = todosRadios.filter((ele,chave,arr)=>{
            return ele.checked

    })
        return radioseleciondado[0]
}

btnCursoSelecionado.addEventListener('click',(eve)=>{
    const rs=radioSelecionado()
    // if(rs==undefined){
    //     alert('Digite uma cena palhaço')
    // }
    const cursoSelecionado=rs.parentNode.previousSibling.textContent
    alert('curso selecionado:'+cursoSelecionado)

    })

   
    btnRemoveCurso.addEventListener('click',(eve)=>{
    const rs=radioSelecionado()
    const cursoSelecionado=rs.parentNode.parentNode
    cursoSelecionado.remove()
    
    

})