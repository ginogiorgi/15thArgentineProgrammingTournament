const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;
const t = parseInt(input[idx++]);

for (let i = 0; i < t; i++) {
    let n = Number(input[idx++]);
    let k = Number(input[idx++]);
    let prefix = "";

    for (let j = 0; j < k; j++) {
        prefix += "a";
    }
    if (n === k) {
        console.log(prefix);
        continue;
    } else {
        let rest = "";
        const chars = ["b", "c", "a"];

        for (let j = 0; j < n - k; j++) {
            rest += chars[j % 3];
        }
        console.log(prefix + rest);
    }
}
