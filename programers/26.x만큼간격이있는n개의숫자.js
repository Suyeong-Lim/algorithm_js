function solution(x, n) {
  let answer = Array.from({ length: n }, (v, i) => (i + 1) * x);
  return answer;
}

let x = 2;
let n = 5;
console.log(solution(x, n));
