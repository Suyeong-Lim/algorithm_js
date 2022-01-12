function solution(n, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer;

  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    let sum = 0;
    while (temp) {
      sum += temp % 10;
      temp = parseInt(temp / 10);
    }

    if (max < sum) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      if (arr[i] > answer) answer = arr[i];
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
