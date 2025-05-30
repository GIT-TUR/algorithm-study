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
      const tmp = this.heap[index];
      this.heap[index] = this.heap[largestIndex];
      this.heap[largestIndex] = tmp;
      index = largestIndex;
    }
  }
  size() {
    return this.heap.length;
  }
}

function solution(n, works) {
  let answer = 0;
  let cnt = 0;
  const pq = new MaxHeap();

  for (const work of works) {
    pq.insert(work);
  }

  while (cnt < n) {
    const top = pq.remove();
    if (top === 0) {
      break;
    }
    pq.insert(top - 1);
    cnt += 1;
  }
  const size = pq.size();

  for (let i = 0; i < size; i++) {
    const top = pq.remove();
    answer += top ** 2;
  }

  return answer;
}
