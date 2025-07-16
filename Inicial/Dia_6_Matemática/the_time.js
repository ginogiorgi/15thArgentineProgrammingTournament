const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [h, m] = input[0].split(":").map(Number);
const a = parseInt(input[1]);

let totalMinutes = (h * 60 + m + a) % 1440;

console.log(
    String(Math.floor(totalMinutes / 60)).padStart(2, "0") +
        ":" +
        String(totalMinutes % 60).padStart(2, "0")
);
