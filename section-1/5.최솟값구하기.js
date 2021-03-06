//오름차순으로 정렬해서 첫번째 값 빼고 스플라이스로 잘라주었음
//   function solution(arr) {
//     let answer;

//     arr.sort(function (a, b) {
//       return a - b;
//     });
//     arr.splice(1, 6);
//     answer = arr;
//     return answer;
//   }

//전형적인 for문을 돌면서 최솟값 min값을 구하기
function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    answer = min;
    return answer;
  }
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
