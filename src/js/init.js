//Set up the variables
export const game = {
    scores: 0,
    roundScore: 0,
    activePlayer: 0,
    isGamePlaying: 0,

    elBtnRoll: null,
    elBtnHold: null,
    elBtnNew: null,
    elMiddleDice: null,
    elScore0: null,
    elScore1: null,
    elCurrent0: null,
    elCurrent1: null,
    elPlayerPanel0: null,
    elPlayerPanel1: null,

    init() {
        this.scores = [0, 0]; //starting scores for all the players are set to zero
        this.roundScore = 0; //0 is the Active Player. 1 is the other player.
        this.activePlayer = 0; //here I set the first player to play

        //Set the state variable to true in order to enable the game
        this.isGamePlaying = true;

        //The buttons
        this.elBtnRoll = document.querySelector(".btn-roll");
        this.elBtnHold = document.querySelector(".btn-hold");
        this.elBtnNew = document.querySelector(".btn-new");

        this.elMiddleDice = document.querySelector(".dice");
        this.elMiddleDice.style.display = "none";

        //here I use getElementById because we have IDs in HTML and it's faster than querySelector
        this.elScore0 = document.getElementById("score-0");
        this.elScore1 = document.getElementById("score-1");
        this.elCurrent0 = document.getElementById("current-0");
        this.elCurrent1 = document.getElementById("current-1");

        //Setting round and total scores to zero.
        this.elScore0.textContent = 0;
        this.elScore1.textContent = 0;
        this.elCurrent0.textContent = 0;
        this.elCurrent1.textContent = 0;

        //Resetting the player names and classes after in case the victory changed the values
        document.getElementById("name-0").textContent = "Player 1";
        document.getElementById("name-1").textContent = "Player 2";

        document.querySelector(`.player-0-panel`).classList.remove("winner");
        document.querySelector(`.player-1-panel`).classList.remove("winner");
        document.querySelector(`.player-0-panel`).classList.add("active"); //here I add it, because after starting a new game I want to make sure the player 1 is well styled
        document.querySelector(`.player-1-panel`).classList.remove("active");
    }
};