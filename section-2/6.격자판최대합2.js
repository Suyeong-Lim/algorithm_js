//π λ¬Έμ  μ€λͺ
//N*N μ κ²©μνμ΄ μ£Όμ΄μ‘μ λ κ° νμ ν©, κ° μ΄μ ν©, λ λκ°μ μ ν© μ€ κ°μ₯ ν° ν©μ κ°μ μΆλ ₯νλ λ¬Έμ 
//κ° ν, μ΄, λκ°μ μ ν©μ κ΅¬ν ν κ·Έμ€ μ΅λκ°μ μ°Ύλλ€.

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let arrLength = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arrLength; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < arrLength; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < arrLength; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arrLength - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
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
