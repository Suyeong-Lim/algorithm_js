function solution(n) {
  let answer = 0;

  n = (n + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(n);
}
let n = 118372;
console.log(solution(n));
