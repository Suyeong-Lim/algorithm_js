function solution(n) {
  return (n + "").split("").reduce((a, c) => a + parseInt(c), 0);
}
let n = 1230;
console.log(solution(n));
