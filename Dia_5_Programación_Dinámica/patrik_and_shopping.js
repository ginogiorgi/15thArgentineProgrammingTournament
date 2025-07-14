const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
let [d1, d2, d3] = input[0].split(" ").map(Number);

console.log(
    Math.min(d1 + d2 + d3, 2 * (d1 + d2), 2 * (d1 + d3), 2 * (d2 + d3))
);
