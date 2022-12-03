// Clickable divs for index
document.getElementById('learnLink').addEventListener('click', redirectLearn);
document.getElementById('playLink').addEventListener('click', redirectPlay);
document.getElementById('solverLink').addEventListener('click', redirectSolver);

function redirectLearn() {
    window.location.href = "learn.html";
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
    //iterate through length of deck to push cards onto it
}

//randomizes the order of the generated cards
function shuffle()
{
    //iterate through length of deck to randomize

}

function startGame()
{
    generateDeck();
	shuffle();
	deal();
}
	
function deal()
{
    //pop 2 cards from deck
    //push 2 cards to playerHand

    //pop 2 cards from deck
    //push 2 cards to dealerHand

    //cards in deck should be hidden, but scards in playerHand
    //and dealerHand should be flipped over

}

//interprets value of player and dealer's cards
function handValue()
{
    //checks if you have an ace
        //if you have an ace, decides if it's 1 or 11
    
    //calculate values of player and dealer hands
}

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
