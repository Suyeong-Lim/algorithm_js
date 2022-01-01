//📍 문제 설명
//N*N 의 격자판이 주어졌을 때 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합의 값을 출력하는 문제
//각 행, 열, 대각선의 합을 구한 후 그중 최대값을 찾는다.

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i][j] + ",");
    }
  }

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
