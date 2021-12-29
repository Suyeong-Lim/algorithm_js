function getCalculate(op, rt, lt) {
  switch (op) {
    case "+":
      return rt + lt;
    case "-":
      return rt - lt;
    case "*":
      return rt * lt;
    case "/":
      return rt / lt;
  }
}

function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (/[0-9]/.test(x)) stack.push(+x);
    else {
      let op = x;
      let right = stack.pop();
      let left = stack.pop();
      console.log(op, right, left);
      stack.push(getCalculate(op, right, left));
    }
  }

  answer = +stack;
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
