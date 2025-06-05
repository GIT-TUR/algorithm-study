const fs = require("fs");

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

  size() {
    return this.heap.length;
  }

  top() {
    return this.heap[0] || null;
  }
}

class MaxHeap {
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

      if (el <= parentEl) {
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
      let largestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex === index) {
        break;
      }

      [this.heap[index], this.heap[largestIndex]] = [
        this.heap[largestIndex],
        this.heap[index],
      ];
      index = largestIndex;
    }
  }

  size() {
    return this.heap.length;
  }

  top() {
    return this.heap[0] || null;
  }
}

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let line = 0;
const T = Number(input[line++]);
const answer = [];

for (let t = 0; t < T; t++) {
  const M = Number(input[line++]);
  const nums = [];
  const result = [];

  while (nums.length < M) {
    const row = input[line++].split(" ").map(Number);
    nums.push(...row);
  }

  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  for (let i = 0; i < M; i++) {
    const num = nums[i];

    if (maxHeap.size() === minHeap.size()) {
      maxHeap.insert(num);
    } else {
      minHeap.insert(num);
    }

    if (minHeap.size() > 0 && maxHeap.top() > minHeap.top()) {
      const maxTop = maxHeap.remove();
      const minTop = minHeap.remove();
      maxHeap.insert(minTop);
      minHeap.insert(maxTop);
    }

    if (i % 2 === 0) {
      result.push(maxHeap.top());
    }
  }

  answer.push(`${result.length}`);
  const lines = [];
  for (let i = 0; i < result.length; i += 10) {
    lines.push(result.slice(i, i + 10).join(" "));
  }
  answer.push(...lines);
}

console.log(answer.join("\n"));
