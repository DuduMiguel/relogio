let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()

const corpo = document.querySelector('body')
const imagem = document.querySelector('img')
const resultado = document.querySelector('div')

resultado.innerText = `São ${hora}:${minuto} da `

if(hora < 5){
    resultado.innerText += ' madrugada'
    imagem.src = 'imagens/madrugada.jpg'
    corpo.style.background = '#E8C4E6'
}else if(hora < 12){
    resultado.innerText += ' manhã'
    imagem.src = 'imagens/manha.jpg'
    corpo.style.background = '#4E6F46'
}else if(hora < 18){
    resultado.innerText += ' tarde'
    imagem.src = 'imagens/tarde.jpg'
    corpo.style.background = '#BA7975'
}else{
    resultado.innerText += ' noite'
    imagem.src = 'imagens/noite.jpg'
    corpo.style.background = '#392A45'
}