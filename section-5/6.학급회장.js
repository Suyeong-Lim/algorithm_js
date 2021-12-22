function solution(s) {
  let answer;
  let sh = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (sh.has(x)) {
      sh.set(x, sh.get(x) + 1);
    } else {
      sh.set(x, 1);
    }
  }

  for (let [k, v] of sh) {
    if (v > max) {
      max = v;
      answer = k;
    }
  }

  console.log(sh);

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
