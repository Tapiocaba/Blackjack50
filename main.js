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

        //check if player or dealer have Aces
        playerHand.hasAce();
        dealerHand.hasAce();
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
    while (dealerHand.getHandValue < 17)
    {
        let card = deck.pop()
        {
            dealerHand.push(card);
            hasAce();
        }
    }
}

//returns value of a hand of cards
function getHandValue(array, card)
{
    let cardValue = 0;
    let handSum = 0;

    for (let i = 0; i < array.length;i++)
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

function isAce(card)
{
    if (card[0] == "A")
    {
        return true;
    }
    return false;
}

function hasAce(array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].isAce)
        {
            return true;
        }
    }
}

function softAce()


function hit()
{
    //check if you can hit
    
    //pop a card from deck to playerHand
    //cannot hit if your hand's value exceeds 21 (nuance here w/ Aces)
}

function stay()
{
    //if player handValue > 21, you lose
    //else if dealer handValue > 21, you win
    //else if both your handValues > 21, tie
    //else if your handValue > dealerHandValue, you win
    //else if your handValue < dealerHandValue, you lose
}

//resets the game
function newGame()
{
    //empties playerHand and dealerHand
    //creates and shuffles new deck
    //deals
}
