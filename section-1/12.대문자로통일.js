function solution(s) {
  let answer = "";

  s = s
    .split("")
    .map((v) => v.toUpperCase())
    .join("");
  console.log(s);
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
