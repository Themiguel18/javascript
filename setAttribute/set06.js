const caixa1 = document.querySelector('.caixa1');
const caixa2 = document.querySelector('.caixa2');
const adicionar = document.querySelector('#btn_add');
const remover = document.querySelector('#btn_remove');

    const cursos = [...caixa1.querySelectorAll('.cursos')]
    cursos.forEach(curso => {
        curso.addEventListener('click', ()=>{
            curso.classList.toggle('selecionado')
            const selecionado = caixa1.querySelector('.selecionado')
            if(selecionado){
                selecionado.classList.remove('selecionado')
            }
                curso.classList.add('selecionado')
            
            
        })

    });

    adicionar.addEventListener('click', ()=>{
        const cursoSelecionado = caixa1.querySelector('.selecionado')
        if(!cursoSelecionado){
            alert('Digite um curso')
            return
        }
        const copia = cursoSelecionado.cloneNode(true)
        caixa2.appendChild(copia)

    })

    remover.addEventListener('click', ()=>{
        const cursoSelecionado = caixa2.querySelector('.selecionado')
        if(!cursoSelecionado){
            alert('There is not curso selecionado')
            return
        }
        caixa1.appendChild(cursoSelecionado)
    })

   
