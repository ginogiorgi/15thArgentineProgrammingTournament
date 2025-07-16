const input = require("fs").readFileSync(0, "utf8").split("\n");
let t = parseInt(input[0]);

for (let i = 0; i < t; i++) {
    let n = parseInt(input[1 + i * 3]);
    let strips = input[2 + i * 3].split(" ").map(Number);
    let sLetters = input[3 + i * 3];
    let l = -1;
    let r = -1;

    for (let k = 0; k < n; k++) {
        if (sLetters[k] === "L") {
            l = k;
            break;
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (sLetters[i] === "R") {
            r = i;
            break;
        }
    }
    if (r === -1 || l === -1 || l > r) {
        console.log(0);
        continue;
    }

    let total = strips.slice(l, r + 1).reduce((a, b) => a + b, 0);
    let full = total;
    let sub = 0;

    while (l < r) {
        let i = l + 1;

        sub += strips[l] + strips[r];
        while (i < r && sLetters[i] !== "L") {
            sub += strips[i];
            i++;
        }
        if (i === r) break;

        let j = r - 1;
        while (j > l && sLetters[j] !== "R") {
            sub += strips[j];
            j--;
        }
        if (j === l || i >= j) break;
        total = total + full - sub;
        l = i;
        r = j;
    }
    console.log(total);
}
