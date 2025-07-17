const input = require("fs").readFileSync(0, "utf8").split("\n");
let board = [input[0].split(""), input[1].split("")];
let len = board[0].length;
let pieces = 0;

for (let i = 0; i < len - 1; i++) {
    if (board[0][i] === "0" && board[0][i + 1] === "0" && board[1][i] === "0") {
        pieces++;
        board[0][i] = "X";
        board[0][i + 1] = "X";
        board[1][i] = "X";
    } else if (
        board[0][i] === "0" &&
        board[0][i + 1] === "0" &&
        board[1][i + 1] === "0"
    ) {
        pieces++;
        board[0][i] = "X";
        board[0][i + 1] = "X";
        board[1][i + 1] = "X";
    } else if (
        board[0][i + 1] === "0" &&
        board[1][i] === "0" &&
        board[1][i + 1] === "0"
    ) {
        pieces++;
        board[0][i + 1] = "X";
        board[1][i] = "X";
        board[1][i + 1] = "X";
    } else if (
        board[0][i] === "0" &&
        board[1][i] === "0" &&
        board[1][i + 1] === "0"
    ) {
        pieces++;
        board[0][i] = "X";
        board[1][i] = "X";
        board[1][i + 1] = "X";
    }
}
console.log(pieces);
