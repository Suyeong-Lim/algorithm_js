function solution(x) {
  let answer = true;
  let sum = 0;
  let temp = x;

  while (x) {
    sum += x % 10;
    x = parseInt(x / 10);
  }

  if (temp % sum !== 0) {
    return false;
  }

  return answer;
}

let x = 10;

console.log(solution(x));
