function solution(s) {
  let answer = "";

  const arr = s.split("");

  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      num = 0;
      answer += " ";
      continue;
    } else if (num % 2) {
      answer += arr[i].toLowerCase();
      num += 1;
    } else {
      answer += arr[i].toUpperCase();
      num += 1;
    }
  }

  return answer;
}

let s = "try hello world";
console.log(solution(s));
