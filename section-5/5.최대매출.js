function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  //먼저 3일동안의 매출을 계산해 놓고

  for (let rt = 0; rt < k; rt++) {
    sum += arr[rt];
  }

  //구해놓은 3일의 매출에서 인덱스를 증가 , 맨 좌측 인덱스는 합에서 삭제해가며 sum의 최대값을 찾아준다.

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
