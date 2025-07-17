const input = require("fs").readFileSync(0, "utf8").split(/\s+/);
let t = parseInt(input[0]);
let bids = input.slice(1, 1 + t).map(Number);
let max = -1;
let firstPrice = -1;
let secondPrice = -1;

for (let i = 0; i < t; i++) {
    if (bids[i] > max) {
        secondPrice = max;
        max = bids[i];
        firstPrice = i;
    } else if (bids[i] > secondPrice) {
        secondPrice = bids[i];
    }
}
console.log(firstPrice + 1 + " " + secondPrice);
