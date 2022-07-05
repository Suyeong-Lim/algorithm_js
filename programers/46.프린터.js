class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    // 원소를 맨 뒤에 추가한다.
    this.queue[this.rear++] = value;
  }
  dequeue() {
    // 맨 앞의 값을 리턴, 삭제
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  peek() {
    return this.queue[this.front]; //큐의 첫번째 값을 리턴한다.
  }

  size() {
    return this.rear - this.front; //배열의 길이를 리턴한다.
  }
}

function solution(priorities, location) {
  let count = 0;
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }
  //   console.log(queue);
  priorities.sort((a, b) => b - a);

  while (queue.size() > 0) {
    //만약 가장 앞에 있는 문서보다 중요도가 높은게 있으면
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      const front = queue.dequeue();
      queue.enqueue(front);
    } else {
      const value = queue.dequeue();
      count++;

      if (location === value[1]) {
        return count;
      }
    }
  }
  return count;
}

const priorities = [2, 1, 3, 4]; 
const location = 3;

console.log(solution(priorities, location));
