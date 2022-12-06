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