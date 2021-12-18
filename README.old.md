# FirstJSGame
## Abstract
The following project is simple means of learning basics of JS. While learning about JS project grew to two separate HTML files containing two separate games, created based on tutorials available on Youtube.
First game (index.html) requires player (represented as red block) to avoid blue blocks, while second game generates one deck of standard cards, divides them into two separete decks and compares values of each top card.
More details about each game are provided in related sections.

## How to use the project
Each game uses separate styles and scripts. While index.html can be run by opening the html file, basicCardGame.html does not update page contents dynamically and requires to be run using Liver Server.

## index.html
Game requires user to jump with red block in order to avoid blue blocks. Jump aciton is performed with left mouse button (registered on release of button). If player collides with blue block, the game will stop and require user to refresh the page to try again.

## basicCardGame.html
Game generates deck of cards and splits it into two. Each deck is assigned to player" and computer.
Whenever user clicks on page, computer will proceed to next step of game. 
- If there are no revealed cards, game will reveal top card of each deck and compare them. Owner of card with higher value takes both cards and moves them into their own deck.
- Game ends when any player has no cards when he is required to reveal another card.
- If revealed cards have the same value, which counts as draw, one card from top of each deck is put aside and another set of cards is again revealed and compared. Winner takes all cards that were taken out of decks and adds them to his own deck.

## Suggested improvements
- Games should not be in the same project, or should be connected by manager which allows to select game to play.
- basicCardGame.html could be updated using react to avoid usage of Live Server
