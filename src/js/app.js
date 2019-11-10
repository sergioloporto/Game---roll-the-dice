window.addEventListener('DOMContentLoaded', (event) => {

    //Set up the variables
    let scores, roundScore, activePlayer, middleDice, score0, score1, current0, current1;

    //Start the players'scores from zero
    scores = [0, 0]; //starting scores for all the players are set to zero
    roundScore = 0; //0 is the Active Player. 1 is the other player.
    activePlayer = 0; //here I set the first player to play

    middleDice = document.querySelector(".dice");
    middleDice.style.display = "none";

    //here I use getElementById because we have IDs in HTML and it's faster than querySelector
    score0 = document.getElementById("score-0");
    score1 = document.getElementById("score-1");
    current0 = document.getElementById("current-0");
    current1 = document.getElementById("current-1");
    score0.textContent = "0";
    score1.textContent = "0";
    current0.textContent = "0";
    current1.textContent = "0";

    document.querySelector(".btn-roll").addEventListener("click", () => {
        const min = 1;
        const max = 6;
        let dice = Math.floor(Math.random() * (max - min + 1)) + min;

        middleDice.style.display = "block";
        middleDice.src = `../img/dice-${dice}.png`;
    });
});