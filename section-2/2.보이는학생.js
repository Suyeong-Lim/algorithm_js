function solution(arr) {
  let answer = 1;
  let maxHeight = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
