function solution(s) {
  let set = new Set();
  let answer;
  let str;

  for (x of s) {
    set.add(x);
  }

  str = [...set];
  answer = str.join("");

  return answer;
}
console.log(solution("ksekkset"));
