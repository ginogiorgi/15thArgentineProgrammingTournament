const input = require("fs").readFileSync(0, "utf8").trim().split(/\n/);
const [a, b, c] = input.map(Number);
const arr = [];
for (let i = 0; i < 50; ++i) arr.push(a);
for (let i = 0; i < 45; ++i) arr.push(b);
for (let i = 0; i < 4; ++i) arr.push(c);
arr.push(c + 1);

console.log(100);
console.log(arr.join(" "));
