const container = document.getElementById('container')
const button = document.getElementById('button')
const img = document.querySelectorAll('img')


button.addEventListener('click', ()=>{
    img.forEach((el)=>{
        el.setAttribute('src','paisagem.jpg')
        el.setAttribute('alt','Paisagem')
        console.log(el)
    })
})