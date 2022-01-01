function solution(s) {
  let answer = "";
  let divide = s.length % 2;

  console.log(divide);
  if (divide === 0) {
    //짝수
    answer = s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else if (divide === 1) {
    //홀수
    answer = s.substring(s.length / 2, s.length / 2 + 1);
  }

  return answer;
}
let s = "afdefde";

console.log(solution(s));

/**💡 삼항연산자로도 이렇게 풀 수있다.

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

 */
