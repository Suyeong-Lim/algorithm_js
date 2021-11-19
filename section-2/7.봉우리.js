//격자판 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다. 봉우리 지역의 개수를 구하라.

function solution(arr) {
  let answer = 0;
  let arrLength = arr.length;
  let dx = [-1, 0, 1, 0],
    dy = [0, -1, 0, +1];

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < arrLength &&
          ny >= 0 &&
          ny < arrLength &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7],
  [3, 7, 1],
  [7, 2, 5],
];

console.log(solution(arr));
