const nome=document.querySelector('#nome')
const email=document.querySelector('#email')
const passe=document.querySelector('#passe')
const btn=document.querySelector('#btn_login')

const user=[
    {nome: 'José Luciano M. Atutu', email: 'joselucianoatutu@gmail.com', passe: 'atutu123'}
]

btn.addEventListener('click', ()=>{
    if(nome.value.length==0 || email.value.length==0 || passe.value.length==0){
        alert('Preencha o campo que falta')
    }
    const encontrado=user.find((u)=>
        u.nome===nome.value.trim() &&
        u.email===email.value.trim() &&
        u.passe===passe.value
        
    )
    if(encontrado){
        alert('Bem-vindo '+ encontrado.nome)
    }else{
        alert('Dados incorretos')
    }
})