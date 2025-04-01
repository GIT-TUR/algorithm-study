let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input.shift().split(" ").map(Number);
const numberArr = input.shift().split(" ").map(Number);

let count = 0;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element > parent) {
        break;
      }

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  pop() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null) {
          if (rightChild < element) {
            swap = rightChildIndex;
          }
        } else {
          if (rightChild < leftChild) {
            swap = rightChildIndex;
          }
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }

  sum() {
    return this.heap.reduce((acc, cur) => acc + cur, BigInt(0));
  }
}

let heap = new MinHeap();

numberArr.forEach((v) => heap.push(BigInt(v)));

while (m > 0) {
  let minSum = heap.pop() + heap.pop();
  heap.push(minSum);
  heap.push(minSum);
  m--;
}

console.log(heap.sum().toString());
