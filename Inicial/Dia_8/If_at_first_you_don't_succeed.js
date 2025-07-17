const input = require("fs").readFileSync(0, "utf8").split(/\s+/);
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const n = parseInt(input[3]);

if (c > a || c > b || a + b - c >= n || n - a - b + c < 1) {
    console.log(-1);
} else {
    console.log(n - a - b + c);
}
