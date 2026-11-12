let agencias=[
    {nome: 'Agencia01', tipo: 'azul'},
    {nome: 'Agencia02', tipo: 'laranja'},
]

let resultado = agencias.filter((el) => el.tipo === 'laranja')
console.log(resultado)