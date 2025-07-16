const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;
const t = parseInt(input[idx++]);

for (let i = 0; i < t; i++) {
    const n = parseInt(input[idx++]);
    const a = input.slice(idx, idx + n).map(Number);

    idx += n;

    const m = parseInt(input[idx++]);

    for (let k = 0; k < m; k++) {
        const s = input[idx++].split("");
        let numTemplate = new Map();
        let charTemplate = new Map();
        let res = true;

        if (s.length !== n) {
            console.log("NO");
            continue;
        }
        for (let j = 0; res && j < n; j++) {
            if (numTemplate.has(a[j]) !== charTemplate.has(s[j])) {
                res = false;
                break;
            }
            if (!numTemplate.has(a[j])) {
                numTemplate.set(a[j], s[j]);
                charTemplate.set(s[j], a[j]);
            } else if (
                numTemplate.get(a[j]) !== s[j] ||
                charTemplate.get(s[j]) !== a[j]
            ) {
                res = false;
                break;
            }
        }
        console.log(res ? "YES" : "NO");
    }
}
