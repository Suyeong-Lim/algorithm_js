function solution(s) {
  s = s.toUpperCase();
  let half = Math.floor(s.length / 2);
  let answer = "YES";
  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - i - 1]) return "NO";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
