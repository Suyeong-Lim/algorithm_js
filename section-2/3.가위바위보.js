function solution(a, b) {
  let answer = "";
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] - b[i]);
    if (arr[i] === 1) {
      answer += "A";
    }
    if (arr[i] === 2 || arr[i] === -1) {
      answer += "B";
    }
    if (arr[i] === 0) answer += "D";
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
