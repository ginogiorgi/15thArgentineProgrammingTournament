const input = require("fs").readFileSync(0, "utf8");
let n = parseInt(input);

if (n % 2 !== 0 || n < 4) {
    console.log(0);
} else {
    let half = n / 2;
    if (half % 2 === 0) {
        console.log(half / 2 - 1);
    } else {
        console.log(Math.floor(half / 2));
    }
}
