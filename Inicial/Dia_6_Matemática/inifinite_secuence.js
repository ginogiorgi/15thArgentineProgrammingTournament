const input = require("fs").readFileSync(0, "utf8").split("\n");
let n = BigInt(input[0]);
let left = 1;
let right = 20000000;
let k = 1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = (BigInt(mid) * BigInt(mid + 1)) / 2n;
    if (sum >= n) {
        k = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
let prevSum = (BigInt(k - 1) * BigInt(k)) / 2n;
let pos = n - prevSum;
console.log(pos.toString());
