const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const cats = input[1].split(" ").map(Number);
const tree = Array.from({ length: n }, () => []);
const stack = [[0, -1, 0]];
let result = 0;

for (let i = 2; i < n + 1; i++) {
    const [u, v] = input[i].split(" ").map((x) => Number(x) - 1);
    tree[u].push(v);
    tree[v].push(u);
}
while (stack.length) {
    const [node, parent, consecutiveCats] = stack.pop();
    let newConsecutiveCats = cats[node] ? consecutiveCats + 1 : 0;
    if (newConsecutiveCats > m) continue;
    const isLeaf =
        node !== 0 &&
        tree[node].filter((child) => child !== parent).length === 0;
    if (isLeaf) {
        result++;
        continue;
    }
    for (const child of tree[node]) {
        if (child !== parent) {
            stack.push([child, node, newConsecutiveCats]);
        }
    }
}
console.log(result);
