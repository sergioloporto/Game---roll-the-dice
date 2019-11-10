window.addEventListener('DOMContentLoaded', (event) => {

    require("./init");

    init();


    /////////////////////////////
    //Adding the eventListener to the Roll Dice button
    /////////////////////////////
    btnRoll.addEventListener("click", () => {
        //set the state variable to run the game only if the game is running :)
        if (isGamePlaying) {
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
            } else {
                nextPlayer();
            }
        }
    });

    btnHold.addEventListener("click", () => {
        //set the state variable to use the hold button only if the game is running :)
        if (isGamePlaying) {
            //add the current(round) score to the total score in the array. ActivePlayer acts as the array Index;
            scores[activePlayer] += roundScore;

            document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

            if (scores[activePlayer] >= 30) {
                document.querySelector(`#name-${activePlayer}`).textContent = "WINNER";
                middleDice.style.display = "none";
                document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
                document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
                isGamePlaying = false;
            } else {
                nextPlayer();
            }
        }
    });

    //Setting up the function to switch player. It will be used in the Roll button and in the Hold button.
    const nextPlayer = () => {
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
    //Start a new game with a new initialization
    btnNew.addEventListener("click", () => {
        init()
    });
});