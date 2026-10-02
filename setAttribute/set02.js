let a = document.getElementById('link')
let button = document.getElementById('button')
button.addEventListener('click', ()=>{
    a.setAttribute('href', 'https://www.google.com')
    a.setAttribute('target', '_blank')
})

