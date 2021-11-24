function solution(s) {
  let answer;
  mid = s.length / 2;
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 === 0) {
      answer = s.substr(mid - 1, 2);
    } else {
      answer = s.substr(mid, 1);
    }
  }

  return answer;
}
console.log(solution("study"));
