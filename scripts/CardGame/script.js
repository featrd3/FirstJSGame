import Deck from "./deck.js"

const computerDeckElement = document.querySelector(".computer-deck")
const computerCardSlot = document.querySelector(".computer-card-slot")
const computerDrawHiddenSlot = document.querySelector(".computer-card-drawHidden-slot")
const computerDrawSlot = document.querySelector(".computer-card-draw-slot")

const playerDeckElement = document.querySelector(".player-deck")
const playerCardSlot = document.querySelector(".player-card-slot")
const playerDrawHiddenSlot = document.querySelector(".player-card-drawHidden-slot")
const playerDrawSlot = document.querySelector(".player-card-draw-slot")

const text = document.querySelector('.text')

const CARD_VALUE_MAP={
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

let playerDeck, computerDeck, stop
let inRound = false

document.addEventListener('click', () => {

    if (stop){
        stop = false
    startGame()
    return
    }

    if (inRound){
        cleanBeforeRound()
    } else {
        flipCards()
    }  
})

startGame()
function startGame(){
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false

    cleanBeforeRound()
}


function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ''
    computerDrawHiddenSlot.innerHTML = ''
    computerDrawSlot.innerHTML = ''
    playerDrawHiddenSlot.innerHTML = ''
    playerDrawSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''

    text.innerText = ''

    updateDeckCount()
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}

function flipCards(){
    inRound = true

    /*
    console.log(computerDeck.cards)
    console.log(playerDeck.cards)
    */
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    updateDeckCount() 

    if (isRoundWinner(playerCard, computerCard)){
        text.innerText = "Win"
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    } else if (isRoundWinner(computerCard, playerCard)) {
        text.innerText = "Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = "Draw"
        drawHandling(computerCard,playerCard)
    }

    checkGameOver(playerDeck,computerDeck)
}

function isRoundWinner (cardOne, cardTwo){
return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

function drawHandling(computerCard,playerCard){
    
    const playerCardDrawHid = playerDeck.pop()
    const computerCardDrawHid = computerDeck.pop()

    checkGameOver(playerDeck,computerDeck)
    if(!stop){

        const playerCardDraw = playerDeck.pop()
        const computerCardDraw = computerDeck.pop()

        playerDrawHiddenSlot.appendChild(playerCardDrawHid.getHTML())
        computerDrawHiddenSlot.appendChild(computerCardDrawHid.getHTML())
        playerDrawSlot.appendChild(playerCardDraw.getHTML())
        computerDrawSlot.appendChild(computerCardDraw.getHTML())

        updateDeckCount() 

        if (isRoundWinner(playerCardDraw, computerCardDraw)){
            text.innerText = "Draw-Win"
            playerDeck.push(playerCardDrawHid)
            playerDeck.push(computerCardDrawHid)
            playerDeck.push(playerCardDraw)
            playerDeck.push(computerCardDraw)
            playerDeck.push(playerCard)
            playerDeck.push(computerCard)
        } else if (isRoundWinner(computerCardDraw, playerCardDraw)){
            text.innerText = "Draw-Lose"
            computerDeck.push(playerCardDrawHid)
            computerDeck.push(computerCardDrawHid)
            computerDeck.push(playerCardDraw)
            computerDeck.push(computerCardDraw)
            computerDeck.push(playerCard)
            computerDeck.push(computerCard)
        } else{
            drawHandling(computerCard,playerCard)
        }
    }
    
}

function checkGameOver(playerDeck,computerDeck){
    if (isGameOver(playerDeck)){
        text.innerText = "You lose"
        stop = true
    } else if (isGameOver(computerDeck)){
        text.innerText = "You win"
        stop = true
    }
}

function isGameOver(deck){
    return deck.numberOfCards === 0
}