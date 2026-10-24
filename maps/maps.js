const caixa=document.querySelector('#caixa')

let mapa=new Map()

mapa.set('curso', 'js')
mapa.set('Luciano', '18')
mapa.set(1, 100)
mapa.set('canal', 1000)

console.log(mapa)

caixa.innerHTML=mapa.get('canal')