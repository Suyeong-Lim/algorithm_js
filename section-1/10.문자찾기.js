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

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
