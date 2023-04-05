"use strict";

const fsP = require("fs/promises");

// A = Rock, 1 pt
// B = Paper, 2 pt
// C = Scissors, 3 pt

// X = need to lose
// Y = need to draw
// Z = need to win

// +0 for loss
// +3 for tie
// +6 for win

loadInputAndCalcualteScore();

async function loadInputAndCalcualteScore() {
    const rounds = await loadInput();
    let score = 0;

    for (let round of rounds) {
        score += checkWinner(round);
    }

    console.log(score);
}

async function loadInput() {
    const input = await fsP.readFile("two_input.txt", "utf8");
    return input.split("\n");
}

function checkWinner(round) {
    const plays = round.split(" ");
    let roundScore = 0;

    if (plays[1] === "X") { // need to lose
        roundScore += 0;

        if (plays[0] === "A") {
            roundScore += 3;
        } else if (plays[0] === "B") {
            roundScore += 1;
        } else if (plays[0] === "C") {
            roundScore += 2;
        }
    } else if (plays[1] === "Y") { // need to draw
        roundScore += 3;
        
        if (plays[0] === "A") {
            roundScore += 1;
        } else if (plays[0] === "B") {
            roundScore += 2;
        } else if (plays[0] === "C") {
            roundScore += 3;
        }
    } else if (plays[1] === "Z") { // need to win
        roundScore += 6;
        
        if (plays[0] === "A") {
            roundScore += 2;
        } else if (plays[0] === "B") {
            roundScore += 3;
        } else if (plays[0] === "C") {
            roundScore += 1;
        }
    }

    return roundScore;
}