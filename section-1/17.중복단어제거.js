function solution(s) {
  let set = new Set();
  let answer = [];

  for (x of s) {
    set.add(x);
  }

  answer = [...set];

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
