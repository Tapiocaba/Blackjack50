var deck = [];
var playerHand = [];
var dealerHand = [];
var playerHandSum = 0;
var dealerHandSum = 0;
var hidden;
var canHit = true;

let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

function start()
{
    generateDeck();
    shuffle();
    startGame();
}

//generates a deck of cards
function generateDeck()
{
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suites = ["C", "D", "H", "S"]

    for (let i = 0; i < suites.length; i++)
    {
        for (let j = 0; j < values.length; j++)
        {
            deck.push(values[j] + "-" + suites[i]);
        }
    }
    return deck;
}

//randomizes the order of the generated cards
function shuffle()
{
    for (let i = 0; i < deck.length; i++)
    {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

//plays the blackjack game
function startGame()
{
    alert("startGame runs");
    hidden = deck.pop();
    dealerHand.push(hidden);
    alert(dealerHand);
    updateHandSums();
    alert(dealerHandSum);

    //dealer continues taking cards until their handValue is greater than or equal to 17
    while (dealerHandSum < 17)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png";
        dealerHand.push(card);
        updateHandSums();
        document.getElementById("dealer-cards").append(cardImg);
        
        alert(dealerHand);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        playerHand.push(card);
        updateHandSums();
        document.getElementById("player-cards").append(cardImg);

        alert(playerHand);
    }
    console.log(playerHandSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stand").addEventListener("click", stand);
}

function hit()
{
    //check if you can hit
    if (!canHit)
    {
        return;
    }

    let cardImg = document.createElement("img");
    var card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    playerHand.push(card);
    updateHandSums();
    document.getElementById("player-cards").append(cardImg);
    
    if (playerHand.softAce() > 21)
    {
        canHit = false;
    }
}

function stand()
{
    updateHandSums();

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    
    let message = "";

    if(playerHandSum > 21)
    {
        message = "Bust!"
    }
    else if (dealerHandSum > 21)
    {
        message = "You win!"
    }
    else if (playerHandSum == dealerHandSum)
    {
        message = "Tie!"
    }
    else if (playerHandSum > dealerHandSum)
    {
        message = "You Win!"
    }
    else if (playerHandSum < dealerHandSum)
    {
        message = "You lose!"
    }

    document.getElementById("dealer-sum").innerText = dealerHandSum;
    document.getElementById("player-sum").innerText = playerHandSum;
    document.getElementById("results").innerText = message;
}


//returns value of a hand of cards
function getHandValue(hand)
{
    let handSum = 0;
    let cardValue = 0;
    let hasAce = false;

    for (let i = 0; i < hand.length; i++)
    {
        let data = hand[i].split("-");
        let value = data[0];
        
        if (isNaN(value))
        {
            if (value == "A")
            {
                cardValue = 11;
                hasAce = true;
            }
            else
            {
                cardValue = 10;
            }
        }
        else
        {
            cardValue = parseInt(value);
            alert(cardValue);
        }
        handSum += cardValue;

        if(hasAce && handSum >= 21)
        {
            handSum -= 10;
        }
    }
    return handSum;
}

function updateHandSums()
{
    dealerHandSum = getHandValue(dealerHand);
    playerHandSum = getHandValue(playerHand);
}

//resets the game
function newGame()
{
    playerHand = [];
    dealerHand = [];
    generateDeck();
    shuffle();
}

window.onload = start();