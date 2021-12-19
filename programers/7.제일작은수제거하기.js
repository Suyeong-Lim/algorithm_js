function solution(n) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let x of n) {
    if (x < min) {
      min = x;
      answer = n.filter((number) => number > min);
    }
    if (answer.length === 0) {
      answer.push(-1);
    }
  }

  return answer;
}

let n = [10];
console.log(solution(n));
