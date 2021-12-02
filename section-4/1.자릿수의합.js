function solution(n, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (x of arr) {
    let sum = 0;
    let temp = x;
    while (temp) {
      sum += temp % 10;
      temp = parseInt(temp / 10);
      if (sum > max) {
        max = sum;
        answer = x;
      } else if (sum === max) {
        if (x > answer) answer = x;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
