function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += i - lt + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
