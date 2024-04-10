const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const gasolina = document.querySelector('#gasolina')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

btn.addEventListener('click',()=>{
    Km = Number(distancia.value)
    KmL = Number(rendimento.value)
    L = Number(gasolina.value)

    media = (Km/KmL) * L

    resultado.textContent = `o custo da viagem será ${media.toFixed(2)}`
})