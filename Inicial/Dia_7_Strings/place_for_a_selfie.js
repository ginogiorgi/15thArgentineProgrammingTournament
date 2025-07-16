const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;
let t = parseInt(input[idx++]);

for (let i = 0; i < t; i++) {
    let [n, m] = [parseInt(input[idx++]), parseInt(input[idx++])];
    let ymx = Array.from({ length: n }, () => parseFloat(input[idx++])).sort(
        (a, b) => a - b
    );

    for (let k = 0; k < m; k++) {
        let [a, b, c] = [
            parseInt(input[idx++]),
            parseInt(input[idx++]),
            parseInt(input[idx++]),
        ];
        let delta = 4 * a * c;
        let sqrtVal = Math.sqrt(delta);
        let left = 0;
        let right = ymx.length - 1;
        let ansIdx = -1;

        if (delta < 0) {
            console.log("NO");
            continue;
        }
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (ymx[mid] > b - sqrtVal) {
                ansIdx = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        if (ansIdx !== -1 && ymx[ansIdx] < b + sqrtVal) {
            console.log("YES");
            console.log(ymx[ansIdx]);
        } else {
            console.log("NO");
        }
    }
    console.log();
}
