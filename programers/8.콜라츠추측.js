function solution(n) {
  let answer = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else if (n % 2 !== 0) {
      n = n * 3 + 1;
    }
    answer++;
  }
  if (answer >= 500) {
    answer = -1;
  }

  return answer;
}

/*⭐️이렇게 짧게 쓸 수있도록 연습해야겠다.⭐️*/
function collatz(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

let n = 6;
console.log(solution(n));
