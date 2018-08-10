




# Installation

To install this project:
  - Clone or fork this repository from GitHub
# Arcade Game

This game is a fun reimagining of a classic arcade game, and a great way to exercise your brain. The interface is clean and simple.

## Table of Contents

* [Motivation](#motivation)
* [Instructions](#instructions)
* [Credits](#credits)

## Motivation

This arcade game was completed as part of my education through Grow with Google Scholarship for a Front-End Nanodegree from Udacity. 

## Instructions

To play and view the game, open `index.html` in your browser

Use up, down, left, and right arrow keys to move your player.

To get make any functional changes or look under the hood, open `js/app.js`


## Credits

# Starter Code

This project was developed from the started code provided by Udacity here:  https://github.com/udacity/frontend-nanodegree-arcade-game.

I created functionality in the app.js JavaScript file, and changed a few things in the HTML and CSS.

The modal and some other functionality was found online using StackOverflow and W3 Schools.

# Dependencies

This project is written with JavaScript, HTML, and CSS.  If you are running an internet browser which does not support these technologies, you will need to use a different browser.

# Code Example

- When the page loads, 'enemies' begin randomly running across the screen at varying random speeds and varying random rows.
- When a player uses the up, down, left, and right arrow keys, the player character moves.
- If a character and enemy are on the same row and within 25 pixels of each other's x values, a collision occurs and sends the player character back to the starting position.
- Once the player character reaches the water, a congratulations modal pops up with a button to replay.
- When replay button is clicked, player character is sent back to the beginning.