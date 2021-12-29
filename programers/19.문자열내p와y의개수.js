//
// ✏️
// 강의에서 배운대로 hash를 사용하여 map을 만든 후에
//둘의 숫자가 다르면 false 가 나오도록 해서 풀었습니다.

function solution(s) {
  let answer = true;
  let hash = new Map();

  for (let x of s) {
    x = x.toUpperCase();
    if (!hash.has(x)) {
      hash.set(x, 1);
    } else hash.set(x, hash.get(x) + 1);
  }

  if (hash.get("P") !== hash.get("Y")) {
    answer = false;
  }

  console.log(hash);
  return answer;
}

let s = "pPoooY";

console.log(solution(s));
