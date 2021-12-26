function checkAnagram(sum) {
  for (let x of t) {
    if (!sh.has(x)) {
      sh.set(x, 1);
    } else {
      sh.set(x, sh.get(x) + 1);
    }
  }

  for (let x of a) {
    if (!sh.has(x) || sh.get(x) != 0) {
      answer = "NO";
    } else {
      sh.set(x, sh.get(x) - 1);
    }
  }
}

function solution(s, t) {
  let answer = "YES";
  let lt = 0;
  let sum = "";

  let sh = new Map();
  let th = new Map();
  let rt = 0;
  for (let x of s) {
    if (!sh.has(x)) {
      sh.set(x, 1);
    } else {
      sh.set(x, sh.get(x) + 1);
    }
  }

  for (let x of t) {
    if (!th.has(x)) {
      th.set(x, 1);
    } else {
      th.set(x, th.get(x) + 1);
    }
  }

  console.log(th);

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
