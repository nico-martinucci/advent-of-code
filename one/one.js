"use strict";

const fsP = require("fs/promises");

async function getInput() {
    const content = await fsP.readFile("one_input.txt", "utf8");
    const splitContent = content.split("\n");
    const sums = [0]
    for (let num of splitContent) {
        if (num === "") {
            sums.push(0)
        } else {
            sums[sums.length - 1] += +num;
        }
    }

    console.log(sums.sort().reverse());
    console.log(sums[1] + sums[2] + sums[3]);
}

getInput();