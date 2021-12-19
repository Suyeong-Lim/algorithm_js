function solution(phone_number) {
  let answer = "";

  answer = phone_number.split("");
  let newAns = [];

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      newAns.push("*");
    } else {
      newAns.push(answer[i]);
    }
  }
  answer = newAns.join("");
  return answer;
}

let n = "01033334444";
console.log(solution(n));

/*⭐️⭐️⭐️  */
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}

console.log("결과 : " + hide_numbers("01033334444"));
