function solution(s) {
  let answer = "";
  let divide = s.length % 2;

  console.log(divide);
  if (divide === 0) {
    //μ§μ
    answer = s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else if (divide === 1) {
    //νμ
    answer = s.substring(s.length / 2, s.length / 2 + 1);
  }

  return answer;
}
let s = "afdefde";

console.log(solution(s));

/**π‘ μΌν­μ°μ°μλ‘λ μ΄λ κ² ν μμλ€.

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

 */
