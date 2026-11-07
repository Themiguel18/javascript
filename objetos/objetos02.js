 function Pessoa(pnome, pidade){
    this.nome=pnome,
    this.idade=pidade,
    this.getNome=function(){
       return this.nome
    },
    this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    this.setNome=function(nome){
        this.nome=nome
    },
 
    this.info=function(){
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        console.log('-----------------')
    }
 }

 let pessoas = []


const btn_adicionar=document.getElementById('btn_add')
const res=document.getElementById('res')

const addPessoa=()=>{
    res.innerHTML=''
    pessoas.forEach((pessoa,index)=>{
        const div=document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML=`<p>Nome: ${pessoa.getNome()}</br> Idade: ${pessoa.getIdade()}</p>`
        
        res.appendChild(div)

        
    })    
    
}



  

btn_adicionar.addEventListener('click',(evt)=>{
    const nome = document.querySelector('#f_nome')
    const idade=document.querySelector('#f_idade')
    if(nome.value=="" || idade.value==""){
        alert('Preencha todos os campos')
        return
    }
        const p=new Pessoa(nome.value,idade.value)
        pessoas.push(p)
        nome.value=""
        idade.value=""
        nome.focus()
       addPessoa()
       
       
        

})

