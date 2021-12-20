function solution(n) {
  let answer = 0;

  for (let i = 0; i < n.length; i++) {
    answer += n[i];
  }

  answer = answer / n.length;
  return answer;
}

/**⭐️⭐️ */
function average(arr) {
  return arr.reduce((a, b) => a + b / arr.length);
}

let n = [5, 5];
console.log(solution(n));
