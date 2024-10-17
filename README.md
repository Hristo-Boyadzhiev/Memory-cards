# Memory-cards

## Table of contents

- [Overview](#overview)
- [Basic rules and stages](#basic-rules-and-stages)
  - [Preparation of the Game Field](#preparation-of-the-game-field)
  - [Gameplay Interaction](#gameplay-interaction)
  - [Matching Check](#matching-check)
  - [Winning Condition](#winning-condition)
- [Tech Stack](#tech-stack)
- [Installation and Usage](#installation-and-usage)

## Overview
Memory Cards is an engaging and entertaining card matching game designed to challenge players' memory and concentration skills. The objective of the game is to find pairs of matching cards by flipping them over two at a time. The game consists of a grid of face-down cards that players will reveal in their quest to uncover matching pairs.

## Basic rules and stages

### Preparation of the Game Field

The game field consists of an equal number of cards, which are placed face down. Each card has an image, and each pair of cards has the same image. The cards are arranged in rows and columns, grouped into pairs.

### Gameplay Interaction

The player selects two cards from the game field by clicking on them. The cards are flipped over to reveal their images.

### Matching Check

After two cards are selected, the game checks if the images on these cards match. If they match, the cards are removed from the field, and the player continues with the next move. If they don't match, the cards are flipped back over, and the player must try to remember their positions for later.

### Winning Condition

The goal of the game is to uncover all pairs of cards with matching images. When all pairs are uncovered, the game ends, displaying the achieved time as well as the player's best time. Additionally, a "New Game" button appears, allowing the player to start a new game.

## Tech Stack

### Build Tool
- Vite: A fast build tool for modern web projects. It is used under the MIT License. You can find it [here](https://github.com/vitejs/vite/blob/main/LICENSE).

### Language
- JavaScript

### Libraries
- React: A JavaScript library for building user interfaces. It is used under the MIT License. You can find it [here](https://github.com/facebook/react/blob/main/LICENSE);
- React-timer-hook: A custom React hook for managing timers and intervals. It is used under the MIT License. You can find it [here](https://github.com/amrlabib/react-timer-hook?tab=MIT-1-ov-file#readme)
  
### Approaches & Techniques
- Semantic HTML;
- CSS Modules.

## License
This project uses several libraries that are licensed under the MIT License, including Vite,React and React-timer-hook.

MIT License allows for free use, modification, and distribution of the code, as long as the original license text and copyright notice are included in all copies or substantial portions of the software.

## Installation and Usage
### Step 1: Clone the repository to your local machine:
### Step 2: Install Dependencies
Run the following command to install the required dependencies:

```bash
npm install
```
### Step 3: Running the Application
To start the development server, run:

```bash
npm run dev
```
### Step 4: Open the Application
Open your browser and navigate to: 
**http://localhost:5173/**



