const input = require("fs").readFileSync(0, "utf8").split("\n");
const [n, a, b] = input[0].split(" ").map(Number);
const dancers = input[1].split(" ").map(Number);
let totalCost = 0;
let left = 0;
let right = n - 1;

while (left < right) {
    if (dancers[left] === dancers[right]) {
        if (dancers[left] === 2) {
            totalCost += 2 * Math.min(a, b);
        }
    } else {
        if (dancers[left] === 2) {
            totalCost += dancers[right] === 0 ? a : b;
        } else if (dancers[right] === 2) {
            totalCost += dancers[left] === 0 ? a : b;
        } else {
            console.log(-1);
            process.exit();
        }
    }
    left++;
    right--;
}
if (n % 2 === 1 && dancers[Math.floor(n / 2)] === 2) {
    totalCost += Math.min(a, b);
}
console.log(totalCost);
