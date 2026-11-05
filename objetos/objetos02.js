 class Pessoa{
    constructor(pnome, pidade){
        this.nome=pnome
        this.idade=pidade
       
    }
    getNome(){
        return this.nome
    }
    getidade(){
        return this.idade
    }
    setNome(nome){
        this.nome=nome
    }
 
    info(){
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
        res.innerHTML+=`<p>Nome: ${pessoa.getNome()}</br> Idade: ${pessoa.getidade()}</p>`
    })
    
}

btn_adicionar.addEventListener('click',(evt)=>{
    const nome = document.querySelector('#f_nome')
    const idade=document.querySelector('#f_idade')
        const p=new Pessoa(nome.value,idade.value)
        pessoas.push(p)
        nome.value=""
        idade.value=""
        nome.focus()
       addPessoa()
        

})