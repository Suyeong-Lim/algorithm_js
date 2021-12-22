function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  let n = arr.length;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum <= m) {
      answer += rt - lt + 1;
    }
    while (sum > m) {
      sum -= arr[lt++];
      if (sum <= m) {
        answer += rt - lt + 1;
      }
    }
  }
  return answer;
}

let a = [1, 1, 1, 1];
console.log(solution(5, a));
