const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const K = Number(input.shift());
const items = input.map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: V + 1 }, () => []);
for (const [u, v, w] of items) {
  graph[u].push([v, w]);
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

const dist = new Array(V + 1).fill(Infinity);
const pq = new MinHeap();
pq.insert([K, 0]);
dist[K] = 0;

while (!pq.isEmpty()) {
  const [curNode, curCost] = pq.remove();

  if (curCost > dist[curNode]) {
    continue;
  }

  for (const [nextNode, nextCost] of graph[curNode]) {
    const newCost = nextCost + curCost;

    if (dist[nextNode] > newCost) {
      dist[nextNode] = newCost;
      pq.insert([nextNode, newCost]);
    }
  }
}

console.log(
  dist
    .slice(1)
    .map((item) => (item === Infinity ? "INF" : item))
    .join("\n")
);
