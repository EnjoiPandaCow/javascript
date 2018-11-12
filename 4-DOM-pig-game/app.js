/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gameState, lastDice;

init();

/*
   Allows us to select and add an Event Listener to a particular DOM element.
   Also passing an anonymous function as the second argument to the Event Listener.
*/
document.querySelector('.btn-roll').addEventListener('click', function () {
    // All of this only happens if the gameState is equal to true.
    if (gameState) {
        // 1. Random Number.
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the Result.
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; // Re-Displaying the dice.
        diceDOM.src = 'dice-' + dice + '.png'; // Picking the img that will be displayed when the dice rolls.

        // 3. Update the round score IF the rolled number is NOT a 1.
        if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1) {
            // Add score.
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            last = dice;
            console.log(last);
        } else {
            // Next player.
            nextPlayer();
        }
        lastDice = dice
    }
});

console.log(lastDice);

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameState) {
        // 1. Add current score to global score.
        scores[activePlayer] += roundScore;

        // 2. Update the UI.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Check if player won the game.
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameState = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameState = true;

    // Allows us to select and change the CSS property of a particular DOM element.
    document.querySelector('.dice').style.display = 'none';

    // Another way of selecting elements if they have an ID.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    // Next player.
    /*
        This is the ternary operator and is the same as writing:
         if (activePlayer === 0 ) {
            activePlayer = 1;
         } else {
            activePlayer = 0;
         }
    */
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; // Setting round score back to one.

    // Displaying the reset round score to the user.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Toggling the class from one panel to another.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

/* Allows us to select and change the text in a particular DOM element.
document.querySelector('#current-' + activePlayer).textContent = dice;

Allows us to select and add HTML code to a particular DOM element.
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

Allows us to read the value of score-0 and store it in var x.
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

/* Using a callback function as the second argument in for the Event Listener.
function btn() {
    // Do something here.
}

document.querySelector('.btn-roll').addEventListener('click', btn);
*/

/* Adding and removing classes.
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
*/






