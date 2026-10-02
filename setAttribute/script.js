let img = document.getElementById('img')
let button = document.getElementById('button')
button.addEventListener('click', ()=>{
    img.setAttribute('src','img2.jpg')
    img.setAttribute('alt','Imagem nova')
})