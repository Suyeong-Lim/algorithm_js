function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i]; //큰 값을 저장해놓고
        arr[i] = arr[j]; //작아야 하는 i 값에 j값을 넣고
        arr[j] = temp; //i값을 넣어준다.
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
