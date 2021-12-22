function solution(str1, str2) {
  let answer = "YES";
  let sh = new Map();

  for (let x of str1) {
    if (sh.has(x)) {
      sh.set(x, sh.get(x) + 1);
    } else {
      sh.set(x, 1);
    }
  }

  for (let y of str2) {
    if (!sh.has(y) || sh.get(y) === 0) {
      return "NO";
    } else {
      sh.set(y, sh.get(y) - 1);
    }
  }

  console.log(sh);
  return answer;
}

let a = "AbaAeCc";
let b = "baeeACA";
console.log(solution(a, b));
