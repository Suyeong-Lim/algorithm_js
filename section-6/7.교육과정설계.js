function solution(a, b) {
  let answer = "YES";
  let queue = a.split("");

  for (let x of b) {
    console.log(b, x, queue);
    if (queue.includes(x)) {
      if (queue.shift() !== x) {
        answer = "No";
      }
    }
  }

  return queue.length > 0 ? "NO" : "YES";
}

let a = "CBA"; //필수 과목의 순서
let b = "CBDAGE"; // 수업 설계
console.log(solution(a, b));
