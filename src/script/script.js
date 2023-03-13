const cardTitulodRef = document.querySelector('#cardTitulo')
const cardImgRef = document.querySelector('#carImg')
const cardTextdRef = document.querySelector('#cardText')
cardTextdRef.value =''
const cardButtonRef = document.querySelector('#buttonCreate')
const containerCardElement = document.querySelector('.card-all')

const card = {
    titulo: '',
    url: '',
    texto: ''
}

const cards = []
var lengthCards = cards.length

function cardTitulo(titulo){
    card.titulo = titulo
}

function cardImg(img){
    card.url = img
}

function cardText(text){
    card.texto = text
}

function btnCreate(event){
    event.preventDefault()
    cards.push(card)
    cardTitulodRef.value =''
    cardImgRef.value =''
    cardTextdRef.value =''
    containerCardElement.innerHTML += `
    <div class="card">
        <img src="${cards[lengthCards].url}">
        <header class="header-card">
            <h1 class="titulo-card">${cards[lengthCards].titulo}</h1>
        </header>
        <main class="main-card">
            <p>${cards[lengthCards].texto}</p>
        </main>
    </div>
    `
    const child = containerCardElement.querySelector('small')
    if (child != null){
        containerCardElement.removeChild(child)
    }
}

cardTitulodRef.addEventListener('keyup', (event) => cardTitulo(event.target.value))
cardImgRef.addEventListener('keyup', (event) => cardImg(event.target.value))
cardTextdRef.addEventListener('keyup', (event) => cardText(event.target.value))
cardButtonRef.addEventListener('click', (event) => btnCreate(event))
