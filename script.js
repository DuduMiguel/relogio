let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()

const corpo = document.querySelector('body')
const imagem = document.querySelector('img')
const resultado = document.querySelector('div')
function carregar() {
    resultado.innerText = `São ${hora}:${minuto} da `

    if (hora < 5) {
        resultado.innerText += ' madrugada, boa madrugada!'
        imagem.src = 'imagens/madrugada.jpg'
        corpo.style.background = '#E8C4E6'
    } else if (hora < 12) {
        resultado.innerText += ' manhã, bom dia!'
        imagem.src = 'imagens/manha.jpg'
        corpo.style.background = '#4E6F46'
    } else if (hora < 18) {
        resultado.innerText += ' tarde, boa tarde!'
        imagem.src = 'imagens/tarde.jpg'
        corpo.style.background = '#BA7975'
    } else {
        resultado.innerText += ' noite, boa noite!'
        imagem.src = 'imagens/noite.jpg'
        corpo.style.background = '#392A45'
    }
}
