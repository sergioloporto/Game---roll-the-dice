//Set up the variables
let scores, roundScore, activePlayer, middleDice, score0, score1, current0, current1, btnRoll, btnHold,
    isGamePlaying;

//I could define this function in old JS style, but since I want to use ES6, I define it before it is invoked.
const init = () => {
    //Start the players'scores from zero
    scores = [0, 0]; //starting scores for all the players are set to zero
    roundScore = 0; //0 is the Active Player. 1 is the other player.
    activePlayer = 0; //here I set the first player to play

    //Set the state variable to true in order to enable the game
    isGamePlaying = true;

    //The buttons
    btnRoll = document.querySelector(".btn-roll");
    btnHold = document.querySelector(".btn-hold");
    btnNew = document.querySelector(".btn-new");

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

    //Resetting the player names and classes after in case the victory changed the values
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(`.player-0-panel`).classList.remove("winner");
    document.querySelector(`.player-1-panel`).classList.remove("winner");
    document.querySelector(`.player-0-panel`).classList.add("active"); //here I add it, because after starting a new game I want to make sure the player 1 is well styled
    document.querySelector(`.player-1-panel`).classList.remove("active");
};