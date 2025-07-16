const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
let n = parseInt(input[0]);
let ability = input.slice(1).map(Number);
let result = 0;

ability.sort((a, b) => a - b);
for (let i = 0; i < ability.length; i += 2) {
    result += ability[i + 1] - ability[i];
}
console.log(result);
