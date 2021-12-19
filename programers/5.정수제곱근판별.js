function solution(s) {
  let answer = 0;

  let number = Math.sqrt(s);
  if (number - parseInt(number) != 0) {
    answer = -1;
  } else {
    answer = (number + 1) * (number + 1);
  }

  return answer;
}

let n = 121;
console.log(solution(n));
