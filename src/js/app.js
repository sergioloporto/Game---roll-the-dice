window.addEventListener('DOMContentLoaded', (event) => {

    //Set up the variables
    let scores, roundScore, activePlayer, middleDice, score0, score1, current0, current1, btnRoll, btnHold;

    //Start the players'scores from zero
    scores = [0, 0]; //starting scores for all the players are set to zero
    roundScore = 0; //0 is the Active Player. 1 is the other player.
    activePlayer = 0; //here I set the first player to play

    //The buttons
    btnRoll = document.querySelector(".btn-roll");
    btnHold = document.querySelector(".btn-hold");

    middleDice = document.querySelector(".dice");
    middleDice.style.display = "none";

    //here I use getElementById because we have IDs in HTML and it's faster than querySelector
    score0 = document.getElementById("score-0");
    score1 = document.getElementById("score-1");
    current0 = document.getElementById("current-0");
    current1 = document.getElementById("current-1");

    //Setting round and total scores to zero.
    score0.textContent = "0";
    score1.textContent = "0";
    current0.textContent = "0";
    current1.textContent = "0";


    /////////////////////////////
    //Adding the eventListener to the Roll Dice button
    /////////////////////////////
    btnRoll.addEventListener("click", () => {
        playerPanel0 = document.querySelector(".player-0-panel");
        playerPanel1 = document.querySelector(".player-1-panel");

        //Activating the random number selection for the Dice
        const min = 1;
        const max = 6;
        let dice = Math.floor(Math.random() * (max - min + 1)) + min;

        //When the game starts, show the dice in the middle
        middleDice.style.display = "block";
        //Show the right dice side, according to the randomly generated number
        middleDice.src = `../img/dice-${dice}.png`;

        // The logic
        if (dice !== 1) {
            //If the number is not 1, add the number to the roundScore
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
            document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
            document.querySelector(`.player-${activePlayer}-panel`).classList.add("active");
        } else {
            nextPlayer();
        }
    });

    btnHold.addEventListener("click", () => {
        //add the current(round) score to the total score in the array. ActivePlayer acts as the array Index;
        scores[activePlayer] += roundScore;

        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 15) {
            document.querySelector(`#name-${activePlayer}`).textContent = "WINNER";
            middleDice.style.display = "none";

        } else {
            nextPlayer();
        }
    });


    //Setting up the function to switch player. It will be used in the Roll button and in the Hold button.
    const nextPlayer = () =>     {
        //If the number is one, Pass to the other player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //Reset the round score for everybody
        roundScore = 0;
        current0.textContent = "0";
        current1.textContent = "0";

        //Adapt the style according to the active player
        playerPanel0.classList.toggle("active");
        playerPanel1.classList.toggle("active");

        //Hide the dice as soon as it is the new player's turn
        middleDice.style.display = "none";
    };


});