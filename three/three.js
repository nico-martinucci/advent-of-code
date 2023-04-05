"use strict";

const fsP = require("fs/promises");

let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alphabet.split("");

getInputAndProcess();


async function getInputAndProcess() {
    const rucksacks = await loadInput();
    let sum = 0;
    
    for (let r of rucksacks) {
        const rBegin = r.split("").splice(0, (r.length / 2));
        const rEnd = r.split("").splice((r.length / 2), (r.length / 2));

        sum += findCommonItem(rBegin, rEnd);
    }

    console.log(sum);
}

async function loadInput() {
    const input = await fsP.readFile("three_input.txt", "utf8");

    return input.split("\n");
}

function findCommonItem(arrOne, arrTwo) {
    for (let char of arrOne) {
        if (arrTwo.includes(char)) {
            return alphabet.indexOf(char) + 1;
        }
    }

    return 0;
}