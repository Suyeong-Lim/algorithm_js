function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  let n = arr.length;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];

    while (sum >= m) {
      if (sum === m) {
        answer++;
      }
      sum -= arr[lt++];
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
