const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const buses = input.slice(2, M + 2).map((line) => line.split(" ").map(Number));
const [start, end] = input[M + 2].split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let el = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.heap[parentIndex];

      if (el[1] >= parentEl[1]) {
        break;
      }

      this.heap[index] = parentEl;
      this.heap[parentIndex] = el;
      index = parentIndex;
    }
  }
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
  bubbleDown() {
    let index = 0;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) {
        break;
      }

      let tmp = this.heap[index];
      this.heap[index] = this.heap[smallestIndex];
      this.heap[smallestIndex] = tmp;
      index = smallestIndex;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const graph = Array.from({ length: N + 1 }, () => []);
for (const [from, to, cost] of buses) {
  graph[from].push([to, cost]);
}

const distances = Array(N + 1).fill(Infinity);
const pq = new MinHeap();
pq.insert([start, 0]);
distances[start] = 0;

while (!pq.isEmpty()) {
  const [curNode, curCost] = pq.remove();

  if (curCost > distances[curNode]) {
    continue;
  }

  for (const [nextNode, nextCost] of graph[curNode]) {
    const newCost = curCost + nextCost;
    if (distances[nextNode] > newCost) {
      distances[nextNode] = newCost;
      pq.insert([nextNode, newCost]);
    }
  }
}

console.log(distances[end]);
