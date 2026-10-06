const caixaCursos=document.querySelector('#caixaCursos')
const btn_c=[...document.querySelectorAll('.cursos')]
const c1_2=document.querySelector('#c1_2')
const cursos = ['HTML','CSS','JavaScript','React','MySQL','Java']
const btnRemoveCurso=document.getElementById('btnRemoverCurso')
const btnAdicionarCurso=document.getElementById('btnAdicionarCurso')
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnAdicionarNovoCursoAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois=document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso=document.getElementById(`nomeCurso`)

let indice = 0

const tirarSelecao=()=>{
    const cursoSelecionado=[...document.querySelectorAll('.selecionado')]
    cursoSelecionado.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso 
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento

}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++

})

const cursoSelecionado =()=>{
        const cursoSelecionado=[...document.querySelectorAll('.selecionado')]
            return cursoSelecionado[0]

    }
        


btnCursoSelecionado.addEventListener('click',(eve)=>{

    try{
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert('curso Selecionado '+ cursoSelecionado().innerHTML)
    }catch(ex){
        alert('Selecione um curso')
    }
    const cursoSelecionado=rs.parentNode.previousSibling.textContent
    alert('curso selecionado:'+cursoSelecionado)

    })

   
    btnRemoveCurso.addEventListener('click',(eve)=>{
    const rs=radioSelecionado()
    const cursoSelecionado=rs.parentNode.parentNode
    cursoSelecionado.remove()
})

btnAdicionarNovoCursoAntes.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!==''){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert('Digite o nome do curso')
        }
    }catch(ex){
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click',(evt)=>{
     const rs=radioSelecionado()
    try{
         if(nomeCurso.value!==''){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert('Digite o nome do curso')
        }
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
    }catch(ex){
        alert('Selecione um curso')
    }
})

 



