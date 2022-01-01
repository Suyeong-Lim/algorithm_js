function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}
let a = 5;
let b = 3;
console.log(solution(a, b));
