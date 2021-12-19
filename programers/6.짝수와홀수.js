function solution(n) {
  let answer = "Even";

  let number = n;

  if (number % 2 !== 0) {
    answer = "Odd";
  }
  return answer;
}

/**⭐️ 삼항연산자로도 잘 풀수있게 연습해야겠다.*/

function evenOrOdd(num) {
  return num % 2 ? "Odd" : Even;
}

let n = 3;
console.log(solution(n));
