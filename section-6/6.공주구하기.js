function solution(a, b) {
  let answer = 0;

  let queue = Array.from({ length: a }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < b; i++) {
      queue.push(queue.shift());
    }
    queue.shift();

    if (queue.length === 1) {
      answer = queue.shift();
    }
  }

  return answer;
}

let a = 8;
let b = 3;
console.log(solution(a, b));
