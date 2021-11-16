function solution(arr) {
  let arrLength = arr.length;
  let answer = Array.from({ length: arrLength }, () => 1);

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      console.log(i, j);
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
