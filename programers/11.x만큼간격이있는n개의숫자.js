function solution(x, n) {
  let answer = [];

  for (let i = 1; i < n + 1; i++) {
    let num = x * i;
    answer.push(num);
  }

  return answer;
}

/**⭐️⭐️ 미리 만들어놓고 하나씩 곱해주기  */
function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

let x = 4;
let n = 3;
console.log(solution(x, n));
