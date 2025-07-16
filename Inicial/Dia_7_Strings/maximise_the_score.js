const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const t = parseInt(input[0]);
let idx = 1;
for (let i = 0; i < t; i++) {
    const n = parseInt(input[idx++]);
    const whiteboard = input[idx++]
        .trim()
        .split(/\s+/)
        .map(Number)
        .sort((a, b) => a - b);
    let score = 0;
    for (let k = 0; k < 2 * n; k += 2) {
        score += Math.min(whiteboard[k], whiteboard[k + 1]);
    }
    console.log(score);
}
