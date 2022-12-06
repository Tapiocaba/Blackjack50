# Blackjack: Design Document
This is the official design documentation where we will discuss how we implemented the project and why we made the descisions we did. 
 <!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-timeline">Project Timeline</a>
        <ul>
        <li><a href="#design">Design</a></li>

      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#about-cs50">About CS50</a></li>
  </ol>
</details>

<!-- proj timeline -->
## Project Timeline

### Design

placeholder

### step 2 


Wireframe: [Figma](https://www.figma.com/file/65yZhTHtTFDJooHU2cLqrN/Blackjack-for-CS50?node-id=0%3A1&t=6kb7p5gngK0dd5A2-1)

<!-- GETTING STARTED -->
## Getting Started


<!-- USAGE EXAMPLES -->
## Usage

* Home:
  * this is a placeholder

  Our home page utilzes CSS animations and transform to have the card animations in place of a traditional navigaton bar.


* Learn:

  ![alt text](https://ichef.bbci.co.uk/news/976/cpsprodpb/13F00/production/_95146618_bills.jpg)

  Our Learn has three sections: the rules, basic strategies, and more advanced strategies, such as card counting. On the side, we implemented a sticky navbar that will direct you to the header of different article sections, and the top navigation bar has CSS animation when switching between the words.

* Play Blackjack:

  The Play section uses JavaScript to simulate a game of Blackjack that the user can play against an automatically generated dealer.

  The code creates three arrays, one for the deck, one for the player's hand, and one for the dealer's hand.

  Upon the page loading, the start() function calls generateDeck(), shuffle(), and startGame() to play the Blackjack game.

  The function generateDeck() iterates through the arrays of suites and card values to push all cards onto the deck. The cards are represented as a hyphenate of their value and their suite (ex: 9-C is the nine of clubs).

  The function shuffle() then randomizes the order of the cards in the deck.

  The main function of the game is startGame(), which starts by pushing the first card of the deck to the dealer's hand and keeping it face down. Then, while the dealer's hand sum is less than 17, the function continues popping cards off the deck and pushing them into the dealer's hand. Once the dealer's hand is dealt, the player is dealt two cards and given the option to hit or to stand.

  Clicking the button labled "hit" calls the function hit(), which first checks if the player's hand is under 21. If so, another card is popped off the deck and pushed to the player's hand. If not, the game ends and the message "Bust! Refresh the page to play again!" displays.

  Clicking the button labled "stand" calls the function stand(), which consists mostly of an if-else statement regarding the player's hand sum in relation to the dealer's hand sum. If the player's hand sum equals 21, they have a Blackjack. If the player's hand sum exceeds 21, the game ends and they bust. If the dealer's hand sum exceeds 21, the player wins. If the player's hand sum equals the dealer's hand sum, they tie. If the player's hand sum is greater than the dealer's hand sum, they win. Finally, if the player's hand sum is less than the dealer's hand sum, they lose.

  The function getHandValue() is used to determine the hand sums of the player and the dealer. To do so, the function loops through each hand array and splits the card's value from its suite. It then checks if the value is a letter (ie, that it is a face card or an Ace). If not, the card value is assigned according to its given number. If not, the function checks if the card is an Ace; if so, the card's value becomes 11, and if not, the card's value becomes 10. To deal with soft hands, the function then checks if the hand has an Ace while having a hand sum of 21 or above. If this is the case, the hand's sum is reduced by 10.

* Blackjack Solver

  Right now, our Blackjack Solver is extremely simple since our other option was to implement the entire odds board. In future iterations, we hope to include those, but for now, it will simply check whether it's better for the player to hit or stand based on their hand total vs. the dealer's hand total.

  The solver 

## Future Improvements

This project was mostly a front-end project that we wanted to tackle, and we were able to implement most of the stylistic features. However, there are still some improvements that can be made in future iterations:

* Adding split options into the solver.
* More detailed learn pages with quiz prompts to ask for information
* Displaying whether the user made the best move or not in the play section
* Inclusion of money and betting in the 'play' section.
* Different play level difficulties.
* Adding page tranistions and other front-end features to make the website more seamless.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Lisa Lin - lisalin@college.harvard.edu

Stella Lei - slei@college.harvard.edu

Project Link: [https://github.com/Tapiocaba/Blackjack](https://github.com/Tapiocaba/Blackjack)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []() Andrew Holmes, Kelly Ding, and all of the other amazing CS50 TFs, CAs, and staff that helped us implement our project.
* []() README template from [othneildrew](https://github.com/othneildrew/Best-README-Template).

References: [https://github.com/Tapiocaba/Blackjack/blob/main/references.md](https://github.com/Tapiocaba/Blackjack/blob/main/references.md)

<!-- ABOUT CS50 -->
## About CS50

<!-- [description of cs50] -->