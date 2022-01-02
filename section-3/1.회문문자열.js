function solution(s) {
  let answer = "true";
  s = s.toUpperCase();
  //1. 반복문으로 비교하기

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      answer = "false";
    }
  }

  //2. 내장함수 이용하여 비교하기
  if (s !== s.split("").reverse().join("")) answer = "false";

  return answer;
}

let str = "goooT";
console.log(solution(str));
