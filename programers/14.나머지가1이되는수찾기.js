function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
  return answer;
}

let x = 10;

console.log(solution(x));
