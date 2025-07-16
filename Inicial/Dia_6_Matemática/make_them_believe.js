const input = require("fs").readFileSync(0, "utf8").trim();
let teams = input.split("\n").map((line) => {
    const [name, score] = line.split(/\s+/);
    return [name, Number(score)];
});

for (let round = 0; round < 2; round++) {
    let nextRound = [];
    for (let i = 0; i < teams.length; i += 2) {
        nextRound.push(teams[i][1] > teams[i + 1][1] ? teams[i] : teams[i + 1]);
    }
    teams = nextRound;
}

teams.sort((a, b) => b[1] - a[1]);
console.log(teams[0][0] + " beats " + teams[1][0]);
