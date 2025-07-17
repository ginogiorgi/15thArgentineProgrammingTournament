const input = require("fs").readFileSync(0, "utf8");
let n = BigInt(input.trim());

let left = 1n;
let right = n;
let answer = n;

while (left <= right) {
    let mid = (left + right) / 2n;
    let candies = n;
    let vasya = 0n;

    while (candies > 0n) {
        let eat = candies < mid ? candies : mid;

        vasya += eat;
        candies -= eat;
        candies -= candies / 10n;
    }
    if (vasya * 2n >= n) {
        answer = mid;
        right = mid - 1n;
    } else {
        left = mid + 1n;
    }
}
console.log(answer.toString());
