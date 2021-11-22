function solution(s) {
  s = s.toUpperCase();
  let answer = "YES";

  //1. 반복문으로 비교하기
  // for (let i = 0; i < s.length / 2; i++) {
  //   if (s[i] !== s[s.length - 1 - i]) {
  //     answer = "NO";
  //   }
  // }

  //2. 내장함수 이용하여 비교하기
  if (s.split("").reverse().join("") !== s) {
    answer = "NO";
  }
  return answer;
}

let str = "goog";
console.log(solution(str));
