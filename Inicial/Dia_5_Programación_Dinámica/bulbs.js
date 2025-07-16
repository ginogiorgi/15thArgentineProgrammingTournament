const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let bulbs = Array(m).fill(0);

for (let i = 1; i <= n; i++) {
    let turnedOn = input[i].split(" ").slice(1).map(Number);
    for (let j = 0; j < turnedOn.length; j++) {
        bulbs[turnedOn[j] - 1] = 1;
    }
}
console.log(bulbs.indexOf(0) === -1 ? "YES" : "NO");
