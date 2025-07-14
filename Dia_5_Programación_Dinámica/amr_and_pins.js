const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
let [r, x, y, newX, newY] = input[0].split(" ").map(Number);
let distance = Math.sqrt((x - newX) ** 2 + (y - newY) ** 2);

console.log(Math.ceil(distance / (2 * r)));
