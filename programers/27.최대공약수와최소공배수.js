function solution(n, m) {
  let answer = [];

  let num = n > m ? n : m;
  let max = 0;
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  answer.push(max);
  return answer;
}

let n = 3;
let m = 12;
console.log(solution(n, m));
