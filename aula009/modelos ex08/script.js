function gerar(){
    let num = document.getElementById('txt')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERROR]')
    }else{
       let n = Number(num.value)
       let c = 1
       tab.innerHTML = ''
       while(c <= 12){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = 'tab(c)'
            tab.appendChild(item)
            c++
       }
        
    }
    
    
   

}