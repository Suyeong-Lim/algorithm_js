function solution(str) {
  let answer = "";
  //   s = str.replace(/[^0-9]/g, "");
  //   answer = parseInt(s, 10);

  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
