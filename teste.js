const typing = document.querySelector('[data-js="typing"]')

const messages = ["Conheça um novo conceito em treinamento personalizado."]

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = () => {
    if (messageIndex === messages.length) {
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    if (currentCharacters.length === currentMessage.length) {
        messageIndex++
        characterIndex = 0
    }
}

setInterval(type, 200)