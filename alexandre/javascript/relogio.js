//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const data = document.querySelector('#data')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const cumprimento = document.querySelector('#cumprimento')




//evento
setInterval(relogio,1000)

//função
function relogio(){
    let dia = new Date()

    let h = dia.getHours()   
    let m = dia.getMinutes() 
    let s = dia.getSeconds()
    let d = dia.getDate()
    let o = dia.getMonth() 
    let a = dia.getFullYear()

    if(h<10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }

    if (h>5 && h<12) {
        cumprimento.textContent = "bom dia"
    }

    else if (h > 11 && h < 18 ) {
        cumprimento.textContent = "boa tarde" 
    }

    else if(h > 17 && h < 6 ) {

        cumprimento.textContent = "boa noite"
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    data.textContent = d
    mes.textContent = o
    ano.textContent = a
}

// const = variável constante, fixa
//let = variável mutavél local
//var =  variável mutável global 