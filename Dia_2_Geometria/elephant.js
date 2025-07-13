const input = require("fs").readFileSync(0, "utf8");

let n = parseInt(input);
let count = 0;

while (n !== 0) {
    count += 1;
    if (n >= 5) {
        n -= 5;
    } else {
        n -= n % 5;
    }
}

console.log(count);
