const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const info = input.map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const indegree = new Array(N + 1).fill(0);

for (const [a, b] of info) {
  graph[a].push(b);
  indegree[b] += 1;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let el = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.heap[parentIndex];

      if (el >= parentEl) {
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
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }
  bubbleDown() {
    let index = 0;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) {
        break;
      }

      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const pq = new MinHeap();
for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) {
    pq.insert(i);
  }
}

const result = [];

while (!pq.isEmpty()) {
  const cur = pq.remove();
  result.push(cur);
  for (const next of graph[cur]) {
    indegree[next] -= 1;
    if (indegree[next] === 0) {
      pq.insert(next);
    }
  }
}

console.log(result.join(" "));
