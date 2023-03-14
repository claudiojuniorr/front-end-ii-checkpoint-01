const cardTitulodRef = document.querySelector('#cardTitulo')
const cardImgRef = document.querySelector('#carImg')
const cardTextdRef = document.querySelector('#cardText')
cardTextdRef.value =''
const cardButtonRef = document.querySelector('#buttonCreate')
const containerCardElement = document.querySelector('.card-all')

var card = {
    titulo: '',
    url: '',
    texto: ''
}

var validityFormError = {
    cardTitulo: true,
    carImg: true,
    cardText: true
}

var cards = []
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
    cardButtonRef.disabled = true
}

function checkForm(){
    const validityFormArray = Object.values(validityFormError)
    const formValidity = validityFormArray.every(item => item === false)
    cardButtonRef.disabled = !formValidity
}

function validityInput(inputRef){
    const inputValid = inputRef.checkValidity()
    const elementFatherRef = inputRef.parentElement 
    if(inputValid){
        elementFatherRef.classList.remove('error')
    }else {
        elementFatherRef.classList.add('error')
    }
    validityFormError[inputRef.id] = !inputValid
    checkForm()
}

cardTitulodRef.addEventListener('keyup', () => validityInput(cardTitulodRef), (event) => cardTitulo(event.target.value))
cardImgRef.addEventListener('keyup', () => validityInput(cardImgRef), (event) => cardImg(event.target.value))
cardTextdRef.addEventListener('keyup', () => validityInput(cardTextdRef), (event) => cardText(event.target.value))

cardButtonRef.addEventListener('click', (event) => btnCreate(event))
