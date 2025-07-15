const input = require("fs").readFileSync(0, "utf8").split("\n");
let [n, k] = input[0].split(" ").map(BigInt);

function bigintSqrt(n) {
    if (n < 2n) return n;
    let left = 1n,
        right = n,
        ans = 1n;
    while (left <= right) {
        let mid = (left + right) >> 1n;
        if (mid * mid <= n) {
            ans = mid;
            left = mid + 1n;
        } else {
            right = mid - 1n;
        }
    }
    return ans;
}

let lim = bigintSqrt(n);
let count = 0n;
for (let i = 1n; i <= lim; i++) {
    if (n % i === 0n) {
        count++;
        if (count === k) {
            console.log(i.toString());
            process.exit(0);
        }
    }
}
for (let i = lim; i >= 1n; i--) {
    if (n % i === 0n) {
        let d = n / i;
        if (d !== i) {
            count++;
            if (count === k) {
                console.log(d.toString());
                process.exit(0);
            }
        }
    }
}
console.log(-1);
