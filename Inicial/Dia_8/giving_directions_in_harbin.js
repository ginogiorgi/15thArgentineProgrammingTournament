const input = require("fs").readFileSync(0, "utf8").split(/\s+/);
let idx = 0;
const t = parseInt(input[idx++]);

for (let i = 0; i < t; i++) {
    const n = parseInt(input[idx++]);
    let lastDir;

    for (let j = 0; j < n; j++) {
        let dir = input[idx++];
        let num = Number(input[idx++]);

        if (j === 0) {
            console.log(n * 2 - 1 + " " + dir);
            console.log("Z " + num);
            lastDir = dir;
        } else {
            switch (lastDir) {
                case "N":
                    console.log(dir === "E" ? "R" : "L");
                    break;
                case "S":
                    console.log(dir === "W" ? "R" : "L");
                    break;
                case "E":
                    console.log(dir === "S" ? "R" : "L");
                    break;
                case "W":
                    console.log(dir === "N" ? "R" : "L");
                    break;
            }
            console.log("Z " + num);
            lastDir = dir;
        }
    }
}
