const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const toppings = input[1].split(" ");

const set = new Set();

for (const topping of toppings) {
  if (topping.endsWith("Cheese")) {
    set.add(topping);
  }
}

if (set.size >= 4) {
  console.log("yummy");
} else {
  console.log("sad");
}
