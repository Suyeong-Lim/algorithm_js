let idx = [];
function solution(s) {
  let answer;
  for (let i = 0; i < s.length; i++) {
    answer = s.replace(/A/gi, "#");
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
