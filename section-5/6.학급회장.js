function solution(s) {
  let answer;
  let sh = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (!sh.has(x)) {
      sh.set(x, 1);
    } else {
      sh.set(x, sh.get(x) + 1);
    }
  }

  for (let [key, val] of sh) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
