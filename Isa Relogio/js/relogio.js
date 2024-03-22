//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//evento
setInterval(relogio,1000)

//função
function relogio(){
    let dia = new Date()

    let h = dia.getHours()   
    let m = dia.getMinutes() 
    let s = dia.getSeconds() 

    if(h<10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
}

// const = variável constante, fixa
//let = variável mutavél local
//var =  variável mutável global 