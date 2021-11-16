function solution(arr) {
  let score = 0;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt++;
      score += cnt;
    } else {
      cnt = 0;
    }
  }

  return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
