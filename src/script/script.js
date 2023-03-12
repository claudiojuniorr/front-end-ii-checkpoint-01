const cardTitulodRef = document.querySelector('#cardTitulo')
const cardImgRef = document.querySelector('#carImg')
const cardTextdRef = document.querySelector('#cardText')
cardTextdRef.value =''
const cardButtonRef = document.querySelector('#buttonCreate')
let containerCardElement = document.querySelector('.card-all')

var card = {
    titulo: '',
    url: '',
    texto: ''
}

var cards = []

function cardTitulo(titulo){
    card.titulo = titulo
}

function cardImg(img){
    card.url = img
}

function cardText(text){
    card.texto = text
}

function btnAdd(event){
    cards.push(card)
    event.preventDefault()
    containerCardElement.innerHTML = ''
    for (let element of cards){
        containerCardElement.innerHTML += `
        <div class="card">
            <img src="${element.url}">
            <header class="header-card">
                <h1 class="titulo-card">${element.titulo}</h1>
            </header>
            <main class="main-card">
                <p>${element.texto}</p>
            </main>
        </div>
        `
    }
    cardTitulodRef.value =''
    cardImgRef.value =''
    cardTextdRef.value =''
}

cardTitulodRef.addEventListener('keyup', (event) => cardTitulo(event.target.value))
cardImgRef.addEventListener('keyup', (event) => cardImg(event.target.value))
cardTextdRef.addEventListener('keyup', (event) => cardText(event.target.value))
cardButtonRef.addEventListener('click', (event) => btnAdd(event))




