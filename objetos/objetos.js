 class carro{
    constructor(pnome, ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo='Esportivo'
            this.velmax=300
        }else if(ptipo==2){
            this.tipo='Normal'
            this.velmax=150
        }else if(ptipo==3){
            this.tipo='Hospitalar'
            this.velmax=140
        }else{
            this.tipo='Militar'
            this.velmax=100
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log('-----------------')
    }
 }

 let c1=new carro('Aston Martin', 1)
 let c2=new carro('Toyota', 2)
 let c3=new carro('Tundra', 3)
 let c4=new carro('Duster', 4)

c1 .info()
c2.info()

 