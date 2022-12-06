// Clickable divs for index
document.getElementById('learnLink').addEventListener('click', redirectLearn);
document.getElementById('playLink').addEventListener('click', redirectPlay);
document.getElementById('solverLink').addEventListener('click', redirectSolver);

function redirectLearn() {
    window.location.href = "rules.html";
}

function redirectPlay() {
    window.location.href = "play.html";
}

function redirectSolver() {
    window.location.href = "solver.html";
}

// blackjack play 
// declaring variables

var deck = [];
var playerHand = [];
var dealerHand = [];
var playerHandSum = 0;
var dealerHandSum = 0;
var hidden;

function start()
{    
    alert("start works");
    generateDeck();
    shuffle();
    startGame();
}
/*
//generates a deck of cards
function generateDeck()
{
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suites = ["C", "D", "H", "S"];

    for (let i = 0; i < suites.length; i++)
    {
        for (let j = 0; j < values.length; j++)
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
    console.log(deck);
}

//plays the blackjack game
function startGame()
{
    hidden = deck.pop();
    dealerHand.push(hidden);
    updateHandSums();

    //dealer continues taking cards until their handValue is greater than or equal to 17
    while (dealerHandSum < 17)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png";
        dealerHand.push(card);
        updateHandSums();
        document.getElementById("dealer-cards").append(cardImg);
    }
    
    alert("dealerHand dealt")

    for (let i = 0; i < 2; i++)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        alert(card)
        cardImg.src = "./cards/" + card + ".png";
        playerHand.push(card);
        updateHandSums();
        alert("playerHand: " + playerHand);
        alert("playerHandSum: " + playerHandSum);
        document.getElementById("player-cards").append(cardImg);
    }

    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stand").addEventListener("click", stand);

}

function hit()
{
    if (playerHandSum < 21)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        playerHand.push(card);
        updateHandSums();
        document.getElementById("player-cards").append(cardImg);
    }
    else
    {
        return;
    }
}

function stand()
{
    updateHandSums();

    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    
    let message = "";

    if (playerHandSum > 21)
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
    start();
}

//resets the game
function newGame()
{
    playerHand = [];
    dealerHand = [];
    start();

}
*/
window.onload = start();


/* solver */

// on form submit, this function is run
document.getElementById("odds-calculator").onsubmit=function() {
    // declares variables
    var dealerCard = parseInt(document.getElementById("dealer-card").value);
    var userCard1 = parseInt(document.getElementById("user-card-1").value);
    var userCard2 = parseInt(document.getElementById("user-card-2").value);

    // if true, then soft hand, if false, then hard hand
    var soft = userCard1 == 1 || userCard2 == 1 ? true : false;

    // if soft, then use soft solution calculations, otherwise use hard calculation
    var solution = soft == true ? solutionSoft(dealerCard, userCard1, userCard2) : solutionHard(dealerCard, userCard1, userCard2);
    
    document.getElementById("best-move").innerHTML = solution;
    return false;
}

// used this chart for odds: https://www.blackjackapprenticeship.com/blackjack-strategy-charts/

// solution for hard hand
function solutionHard(dealerCard, userCard1, userCard2) {
    let sum = userCard1 + userCard2;

    switch(sum) {
        case 8:
            return "Hit";
        case 9:
            if (dealerCard == 2 || dealerCard >= 7 || dealerCard == 1) {
                return "Hit";
            }
            return "Double Down or Hit";
        case 10:
            if (dealerCard <= 9 || dealerCard != 1) {
                return "Double Down or Hit";
            }
            return "Hit";
        case 11:
            return "Double Down or Hit";
        case 12:
            if (dealerCard < 4 || dealerCard > 6) {
                return "Hit";
            }
            return "Stand";
        case 13:
        case 14:
        case 15:
        case 16:
            if (dealerCard == 1 || dealerCard > 6) {
                return "Hit";
            }
            return "Stand";
        case 17:
            return "Stand";
        default: return "Hit"; // if sum is less than 8, always hit
    }
}

function solutionSoft(dealerCard, userCard1, userCard2) {

    let sum = userCard1 + userCard2;
    switch(sum) {
        case 2:
            return "Hit" // always hit here since will be 12 or 2.
        case 3:
        case 4:
            if (dealerCard < 5 || dealerCard > 6) {
                return "Hit";
            }
            return "Double or Hit";
        case 5:
        case 6:
            if (dealerCard < 4 || dealerCard > 6) {
                return "Hit";
            }
            return "Double or Hit";
        case 7:
            if (dealerCard < 3 || dealerCard > 6) {
                return "Hit";
            }
            return "Double or Hit";
        case 8:
            if (dealerCard < 7) {
                return "Double or Stand";
            }
            else if (dealerCard < 8) {
                return "Stand";
            }
            return "Hit";
        case 9:
            if (dealerCard != 6) {
                return "Stand";
            }
            return "Double or Stand";
        case 10:
            return "Stand";
        default: return "Automatic Blackjack!"; // Ace + 10 / face card is insta win
    }
}
