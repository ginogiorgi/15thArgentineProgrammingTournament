const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
const n = String(input[0]);

console.log((parseInt(n[0]) + 1) * Math.pow(10, n.length - 1) - n);
