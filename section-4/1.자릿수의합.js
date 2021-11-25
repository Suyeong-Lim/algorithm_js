function solution(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    sum = 0;
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
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
