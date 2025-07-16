const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
    const a = parseInt(input[1 + i * 4]);
    let result = 0;
    for (let k = 1; k < 4; k++) {
        const participant = parseInt(input[1 + i * 4 + k]);
        if (a < participant) result++;
    }
    console.log(result);
}
