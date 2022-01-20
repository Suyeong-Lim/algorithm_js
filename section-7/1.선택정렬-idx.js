function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j; //작은 값의 위치를 idx에 저장해
    }
    //가장 작은 인덱스 번호 idx를 arr[i]값과 arr[idx] 값의 위치를 바꿔준다.
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
