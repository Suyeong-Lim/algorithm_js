//for-of 사용하기
function solution(s, t) {
  let count = 0;
  for (x of s) {
    if (x === t) {
      count++;
    }
  }
  answer = count;
  return answer;
}

// //혹은 타겟기준으로 split 해준 후에 -1을 해줘도 된다.
// function solution(s, t) {
//   let answer = s.split(t);
//   return answer.length - 1;
// }

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
