# Blackjack: Design Document
This is the official design documentation where we will discuss how we implemented the project and why we made the descisions we did. 
 <!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-timeline">Project Timeline</a>
        <ul>
        <li><a href="#inspiration">Inspiration</a></li>
        <li><a href="#design">Design</a></li>
        </ul>
    </li>
    <li>
      <a href="#project-pages">Project Pages</a>
      <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#reflection">Reflection</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- PROJECT TIMELINE -->
## Project Timeline

### Inspiration
We were inspired by both of our interest in probability and differeng gambling games. We chose Blackjack as it's extremely popular and there is such as thing as a "perfect" strategy to the game. Additionally, we were both interested in implementing multiple JS functions in order to make an effective website. Lisa is interested in front-end design and wanted to learn new ways to implement CSS animations. Stella was interested in the implementation aspect of both the solver and play sections, and we both have varying experiences in both topics. Thus, we mostly worked together to debug issues and add new design ideas. 

<!-- DESIGN -->

### Design
First, we created a document to write down all of the features we wanted to implement. CS50 encouraged us to have good, better, and best goals, so those are outlined as follows:

* **Good outcome:**
  * Beginner and Advanced guide to BlackJack
  * Computer can play against the player
  * A basic optimal strategy calculator, not necessarily having images.
* **Better outcome:**
  * Beginner and Advanced guide to BlackJack with quiz questions that will enforce the user's understanding.
  * Computer can play against the player
  * A basic optimal strategy calculator with images
* **Best outcome:**
  * Beginner and Advanced guide to BlackJack with quiz questions that will enforce the user's understanding.
  * Computer can play against the player with different difficulties
  * A basic optimal strategy calculator with images and an explanation for reasoning of strategy.

Afterwards, we outlined the pages and functionality of all of the pages we'd need. Afterwards, we defined a color pallette and wireframed the design in Figma.

Wireframe: [Figma](https://www.figma.com/file/65yZhTHtTFDJooHU2cLqrN/Blackjack-for-CS50?node-id=0%3A1&t=6kb7p5gngK0dd5A2-1)

<!-- Website Outline -->
### Website Outline
We decided to have three main parts of the project, and each subsection would require a list of features. By breaking down the larger scope of the project into smaller parts, we were able to effectively split up the work and work from small -> big.

**Features of Website & Subsections**
* **Learn**
  * Rules
  * Basic Strategy
  * Advanced Strategy
* **Play**
  * Hit and Stand
  * Utilizes images
  * If we have time: animations
* **Solver**
  * Dealer's and Player's hand
  * Tells player whether to hit, stand, or take other actions
  * Instructions for how to use

In addition to the main functionality features, we wanted to add some cooler front-end features to do. We also created a good, better, best outcome for the front-end features:
* **Good outcome:**
  * Card animations for the homepage
  * Smooth scrolling
* **Better outcome:**
  * Navigation bar animation
  * Side navigation bar for learn
* **Best outcome:**
  * Blackjack game animation
  * Solver card images

While we weren't able to implement all of our features to the "best outcome" outline, having this was useful for us to track our progress with the project and ensure that we weren't spending too much time on one set of features. Luckily, we were able to allocate the right amount of time for each section to ensure their functionality while still achieving most of our front-end design goals.

<!-- PROJECT PAGES -->
## Project Pages

Here, we'll go page-by-page and describe our thought process and implementation. We only utilized HTML/CSS/JS, with Bootstrap for the navigation bars. The user shouldn't need to download extra APIs to utilize/test our project -- downloading it according to instructions given in README.md and running it on their local browser is sufficient.

<!-- USAGE EXAMPLES -->
###  Description

* **index.html:**

  Our home page utilzes CSS animations and transform to have the card animations in place of a traditional navigaton bar. Here, we were able to learn about utilizing div and classes with CSS to manipulate the positioning and hover. Since we had 3 different card grops, 3 divs had to be used for those. Another div was used to encompass that, and a third div container encompasses the second so we can move around the direction. 

  The images don't load automatically, so in included a preload at the beginning in the head. I didn't want to preload everything at once though, but in future iterations this is something that could be improved.

  Upon hover, the cards will open up and a box shadow will appear to make it look smoother. Once the mouse is removed, it'll revert back to it's original position. The most difficult part of this was playing around with the transform and translation effects to ensure it didn't move too quickly or slowly, and we got to work with cubic-bezier, which was pretty fun! The JS file for the index is main.js, where it redirects the user to different pages depending on which card group they click on.

* **Learn pages:**

  Our Learn has three sections: the rules, basic strategies, and more advanced strategies, such as card counting. These are encompassed within basics.html, advanced.html, and rules.html. On the side, we implemented a sticky navbar that will direct you to the header of different article sections, and the top navigation bar has CSS animation when switching between the words. 

* **play.html and blackjack.js**

  The Play section uses JavaScript to simulate a game of Blackjack that the user can play against an automatically generated dealer. The code creates three arrays, one for the deck, one for the player's hand, and one for the dealer's hand. Upon the page loading, the start() function calls generateDeck(), shuffle(), and startGame() to play the Blackjack game.

  The function generateDeck() iterates through the arrays of suites and card values to push all cards onto the deck. The cards are represented as a hyphenate of their value and their suite (ex: 9-C is the nine of clubs). The function shuffle() then randomizes the order of the cards in the deck.

  The main function of the game is startGame(), which starts by pushing the first card of the deck to the dealer's hand and keeping it face down. Then, while the dealer's hand sum is less than 17, the function continues popping cards off the deck and pushing them into the dealer's hand. Once the dealer's hand is dealt, the player is dealt two cards and given the option to hit or to stand.

  Clicking the button labled "hit" calls the function hit(), which first checks if the player's hand is under 21. If so, another card is popped off the deck and pushed to the player's hand. If not, the game ends and the message "Bust! Refresh the page to play again!" displays.

  Clicking the button labled "stand" calls the function stand(), which consists mostly of an if-else statement regarding the player's hand sum in relation to the dealer's hand sum. If the player's hand sum equals 21, they have a Blackjack. If the player's hand sum exceeds 21, the game ends and they bust. If the dealer's hand sum exceeds 21, the player wins. If the player's hand sum equals the dealer's hand sum, they tie. If the player's hand sum is greater than the dealer's hand sum, they win. Finally, if the player's hand sum is less than the dealer's hand sum, they lose.

  The function getHandValue() is used to determine the hand sums of the player and the dealer. To do so, the function loops through each hand array and splits the card's value from its suite. It then checks if the value is a letter (ie, that it is a face card or an Ace). If not, the card value is assigned according to its given number. If not, the function checks if the card is an Ace; if so, the card's value becomes 11, and if not, the card's value becomes 10. To deal with soft hands, the function then checks if the hand has an Ace while having a hand sum of 21 or above. If this is the case, the hand's sum is reduced by 10.

  The button's css also includes a small animation to make it smoother and more satisfying to use.

*  **solver.html and solver.js**

  Right now, our Blackjack Solver is extremely simple since our other option was to implement the entire odds board. The user can enter in the dealer's visible card and their own two cards, and the solver will tell the user the best move based on the chart shown in advanced.html. At the bottom, we added an instructions for use. In future iterations, we hope to include those, but for now, it will simply check whether it's better for the player to hit or stand based on their hand total vs. the dealer's hand total.

  A surprising difficuty of the solver was figuring out the div and css components. Since there's many different parts that need to be aligned, using flexbox was a great way to fix the issue.

### Reflection

Working on this project was very rewarding, as we had to utilize Git, pull requests, and implement a list of features along with different front-end features. We definetly overshot with out "best outcome," goal, but we're happy with the progress we've made and feel that this project was very rewarding to implement.

Other features for future iterations can be found in README.md.

References: [https://github.com/Tapiocaba/Blackjack/blob/main/references.md](https://github.com/Tapiocaba/Blackjack/blob/main/references.md)

<!-- CONTACT -->
## Contact

Lisa Lin - lisalin@college.harvard.edu
Stella Lei - slei@college.harvard.edu
Project Link: [https://github.com/Tapiocaba/Blackjack](https://github.com/Tapiocaba/Blackjack)