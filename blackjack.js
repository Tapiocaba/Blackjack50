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
    generateDeck();
    shuffle();
    startGame();
}

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
        let card = deck.pop();
        cardImg.src = "./card_images/" + card + ".png";
        dealerHand.push(card);
        updateHandSums();
        document.getElementById("dealer-cards").append(cardImg);
    }
    
    //deals player's hand
    for (let i = 0; i < 2; i++)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./card_images/" + card + ".png";
        playerHand.push(card);
        updateHandSums();
        document.getElementById("player-cards").append(cardImg);
    }

    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stand").addEventListener("click", stand);

}

function hit()
{
    //ensures player hasn't busted yet before they hit
    if (playerHandSum < 21)
    {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./card_images/" + card + ".png";
        playerHand.push(card);
        updateHandSums();
        document.getElementById("player-cards").append(cardImg);
    }
    else
    {
        document.getElementById("results").innerText = "Bust! \n Refresh the page to play again!";
        return;
    }
}

function stand()
{
    updateHandSums();

    document.getElementById("hidden").src = "./card_images/" + hidden + ".png";
    
    test = document.getElementById("hidden").src;
    /*alert(test);
    let message = "";*/

    if (playerHandSum == 21)
    {
        message = "Blackjack! \n Refresh the page to play again!"
    }
    else if (playerHandSum > 21)
    {
        message = "Bust! \n Refresh the page to play again!";
    }
    else if (dealerHandSum > 21)
    {
        message = "You win! \n Refresh the page to play again!";
    }
    else if (playerHandSum == dealerHandSum)
    {
        message = "Tie! \n Refresh the page to play again!";
    }
    else if (playerHandSum > dealerHandSum)
    {
        message = "You Win! \n Refresh the page to play again!";
    }
    else if (playerHandSum < dealerHandSum)
    {
        message = "You lose! \n Refresh the page to play again!";
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
        //separates the value from the suite of the card
        let data = hand[i].split("-");
        let value = data[0];
        
        //if the card's value is a letter, make its value 11 if it's an A, and a 10 otherwise
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

        //reduces the value of the ace if counting it as 11 makes the handSum
        //greater than or equal to 21
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

window.onload= start();