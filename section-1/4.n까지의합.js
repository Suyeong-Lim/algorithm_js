function solution(n) {
  let answer;
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum = sum + i;
    answer = sum;
  }
  return answer;
}

console.log(solution(6));
