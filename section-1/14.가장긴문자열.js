function solution(s) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";

  for (x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
