
const personagem = document.querySelector('#personagem')
const bt01 = document.querySelector('#luffy')
const bt02 = document.querySelector('#zoro')
const bt03 = document.querySelector('#sanji')

bt01.addEventListener('click',luffy)
bt02.addEventListener('click',zoro)
bt03.addEventListener('click',sanji)

function luffy() {

personagem.src = 'images/luffy.jpg'
 
}

function zoro() {

    personagem.src = 'images/zoro.jpg'
    
}

function sanji() {
    personagem.src = 'images/sanji.jpg'
}