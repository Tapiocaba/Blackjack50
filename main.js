// Clickable divs for index
document.getElementById('learnLink').addEventListener('click', redirectLearn);
document.getElementById('playLink').addEventListener('click', redirectPlay);
document.getElementById('solverLink').addEventListener('click', redirectSolver);

function redirectLearn() {
    window.location.href = "basics.html";
}

function redirectPlay() {
    window.location.href = "play.html";
}

function redirectSolver() {
    window.location.href = "solver.html";
}

// overlay display
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var suites = ["C", "D", "H", "S"];
var deck = new Array();
var playerHand = new Array();
var dealerHand = new Array();
var playerHandSum;
var dealerHandSum;
var playerAceCount = 0;
var dealerAceCount = 0;
var canHit = true;

//generates a deck of cards
function generateDeck()
{
    for (let i = 0; i < suites.length; i++)
    {
        for (let j = 0; i < values.length; j++)
        {
            deck.push(values[j] + "-" + suites[i]);
        }
    }
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
}

//deal hands of cards to player and dealer
function deal()
{
    for (let i = 0; i < 2; i++)
    {
        var playerCard = deck.pop();
        var dealerCard = deck.pop();

        playerHand.push(playerCard);
        dealerHand.push(dealerCard);

        playerHandSum = playerHand.getHandValue();
        dealerHandSum = dealerHand.getHandValue();

        playerAceCount = countAces(playerHand);
        dealerAceCount = countAces(dealerHand);
    }

    //cards in deck should be hidden, but cards in playerHand
    //and dealerHand should be flipped over
}

function startGame()
{
    generateDeck();
	shuffle();
	deal();

    //dealer continues taking cards until their handValue is greater than or equal to 17
    while (dealerHand.getHandValue() < 17)
    {
        let card = deck.pop()
        {
            dealerHand.push(card);
            countAces();
        }
    }

    playerHandSum = playerHand.getHandValue();
    dealerHandSum = dealerHand.getHandValue();
}

//returns value of a hand of cards
function getHandValue(hand, card)
{
    let cardValue = 0;
    let handSum = 0;

    for (let i = 0; i < hand.length;i++)
    {
        let data = card.split("-");
        let value = data[0];
        
        if (isNaN(value))
        {
            if (value == "A")
            {
                cardValue = 11;
            }
            cardValue = 10;
        }
        cardValue = parseInt(value);
        handSum += cardValue;
    }
    return handSum;
}

function countAces(hand)
{
    let aceCount = 0;

    for (let i = 0; i < hand.length; i++)
    {
        if (hand[i] == "A")
        {
            aceCount++;
        }
    }
    return aceCount;
}

//reduces the value of an Ace if counting it as 11 makes the player's hand exceed 21
function softAce(handSum, aceCount)
{
    while(handSum > 21 && aceCount)
    {
        handSum -= 10;
        aceCount -= 1;
    }
    return handSum;
}

function hit()
{
    //check if you can hit
    if (!canHit)
    {
        return;
    }

    var card = deck.pop();
    playerHand.push(card);
    playerHandSum = playerHand.getHandValue();
    playerAceCount = countAces(playerHand);
    
    if (playerHand.softAce() > 21)
    {
        canHit = false;
    }
}

function stand()
{
    playerAceCount = countAces(playerHand);
    dealerAceCount = countAces(dealerHand);

    playerHandSum = softAce(playerHandSum, playerAceCount);
    dealerHandSum = softAce(dealerHandSum, dealerAceCount);

    canHit = false;
    
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
}

//resets the game
function newGame()
{
    playerHand = [];
    dealerHand = [];
    generateDeck();
    shuffleDeck();
}
