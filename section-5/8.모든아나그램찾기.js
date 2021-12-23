function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let sh = new Map();

  for (let x of t) {
    if (!sh.has(x)) {
      sh.set(x, 1);
    }
  }
  console.log(sh);
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
