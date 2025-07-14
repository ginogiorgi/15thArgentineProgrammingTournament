const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
let n = parseInt(input[0]);
let prices = input.slice(1, 1 + n).map(Number);
let q = parseInt(input[1 + n]);

prices.sort((a, b) => a - b);
let queries = input.slice(2 + n).map(Number);

for (let i = 0; i < q; i++) {
    let left = 0,
        right = prices.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (prices[mid] <= queries[i]) left = mid + 1;
        else right = mid;
    }
    console.log(left);
}
