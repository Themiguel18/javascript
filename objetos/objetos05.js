const txt=document.getElementById('txt')
const password=document.getElementById('password')
const btn=document.getElementById('btn')
const olho=document.getElementById('olho')
let pessoas=[
    {nome: 'Jose Atutu', senha: 'atutu123'},
    {nome: 'Jose Miguel', senha: '1234'}
]

olho.addEventListener('click', ()=>{
    if(password.type==='password'){
        password.type='text'
        olho.classList.remove('fa-eye-slash')
        olho.classList.add('fa-eye')
    }else{
        password.type='password'
        olho.classList.remove('fa-eye')
        olhp.classList.add('fa-eye-slash')
    }
})

btn.addEventListener('click', ()=>{
    if(txt.value.length=='' || password.value.length==''){
        alert('Preencha todos os campos')
    }else{
        const txtNome=String(txt.value)
        const Senha=String(password.value)
        pessoas.map((el, index)=>{
            if(txtNome===el.nome && Senha===el.senha)
           alert('Bem vindo')
        })

    }
})


