function solution(phone_number) {
  let answer = "";

  answer = phone_number.split("");

  answerArr = [];

  for (let i = 0; i < answer.length; i++) {
    answerArr.push("*");
    if (i < answer.length - 4) {
      answer.push(answer[i]);
    }
  }

  return answer;
}

let n = "01033334444";
console.log(solution(n));
