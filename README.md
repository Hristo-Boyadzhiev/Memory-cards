# Memory-cards

This is a responsive SPA (Single Page Application) created using React, with HTML and CSS. For tracking time, the react-timer-hook library was used.

### Game description
"Memory Cards" is a game that helps us train our memory. The goal is to find pairs of cards with matching images, while remembering the positions of the cards that have been revealed previously.


**The basic rules and stages of the game are as follows:**

**Preparation of the Game Field:**
The game field consists of an equal number of cards, which are placed face down. Each card has an image, and each pair of cards has the same image. The cards are arranged in rows and columns, grouped into pairs.

**Gameplay Interaction:**

The player selects two cards from the game field by clicking on them. The cards are flipped over to reveal their images.

**Matching Check:**

After two cards are selected, the game checks if the images on these cards match. If they match, the cards are removed from the field, and the player continues with the next move. If they don't match, the cards are flipped back over, and the player must try to remember their positions for later.

**Winning Condition:**

The goal of the game is to uncover all pairs of cards with matching images. When all pairs are uncovered, the game ends, displaying the achieved time as well as the player's best time. Additionally, a "New Game" button appears, allowing the player to start a new game.

### Usage

To run the game:

Type in the terminal

cd memory-cards

npm start

