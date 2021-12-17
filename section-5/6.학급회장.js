function solution(s) {
  let answer;
  let sh = new Map();

  for (let x of str) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  console.log(sh);

  let max = Number.MIN_SAFE_INTEGER;
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
