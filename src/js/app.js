import {game} from "./init";

window.addEventListener('DOMContentLoaded', (event) => {

    game.init();


    /////////////////////////////
    //Adding the eventListener to the Roll Dice button
    /////////////////////////////
    game.elBtnRoll.addEventListener("click", () => {
        //set the state variable to run the game only if the game is running :)
        if (game.isGamePlaying) {
            game.elPlayerPanel0 = document.querySelector(".player-0-panel");
            game.elPlayerPanel1 = document.querySelector(".player-1-panel");

            //Activating the random number selection for the Dice
            const min = 1;
            const max = 6;
            let dice = Math.floor(Math.random() * (max - min + 1)) + min;

            //When the game starts, show the dice in the middle
            game.elMiddleDice.style.display = "block";
            //Show the right dice side, according to the randomly generated number
            game.elMiddleDice.src = `img/dice-${dice}.png`;

            // The logic
            if (dice !== 1) {
                //If the number is not 1, add the number to the roundScore
                game.roundScore += dice;
                document.querySelector(`#current-${game.activePlayer}`).textContent = game.roundScore;
            } else {
                nextPlayer();
            }
        }
    });

    game.elBtnHold.addEventListener("click", () => {
        //set the state variable to use the hold button only if the game is running :)
        if (game.isGamePlaying) {
            //add the current(round) score to the total score in the array. ActivePlayer acts as the array Index;
            game.scores[game.activePlayer] += game.roundScore;

            document.querySelector(`#score-${game.activePlayer}`).textContent = game.scores[game.activePlayer];

            if (game.scores[game.activePlayer] >= 30) {
                document.querySelector(`#name-${game.activePlayer}`).textContent = "WINNER";
                game.elMiddleDice.style.display = "none";
                document.querySelector(`.player-${game.activePlayer}-panel`).classList.add("winner");
                document.querySelector(`.player-${game.activePlayer}-panel`).classList.remove("active");
                game.isGamePlaying = false;
            } else {
                nextPlayer();
            }
        }
    });

    //Setting up the function to switch player. It will be used in the Roll button and in the Hold button.
    const nextPlayer = () => {
        //If the number is one, Pass to the other player
        game.activePlayer === 0 ? game.activePlayer = 1 : game.activePlayer = 0;
        //Reset the round score for everybody
        game.roundScore = 0;
        game.elCurrent0.textContent = "0";
        game.elCurrent1.textContent = "0";

        //Adapt the style according to the active player
        game.elPlayerPanel0.classList.toggle("active");
        game.elPlayerPanel1.classList.toggle("active");

        //Hide the dice as soon as it is the new player's turn
        game.elMiddleDice.style.display = "none";
    };
    //Start a new game with a new initialization
    game.elBtnNew.addEventListener("click", () => {
        game.init()
    });
});