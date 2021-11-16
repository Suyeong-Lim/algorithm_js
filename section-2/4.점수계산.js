function solution(arr) {
  let score = 0;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score++;
      cnt += score;
      //console.log(i);
      console.log(score);
    } else {
      score = 0;
    }
  }

  return cnt;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
