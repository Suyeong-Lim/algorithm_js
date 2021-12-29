function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2); // Set에 홀수만 저장 -> 1 삭제 -> 2 추가
  for (let j = 3; j <= Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        // j의 배수(k) 삭제
        s.delete(k);
      }
    }
  }
  return s.size;
}
let s = 10;

console.log(solution(s));
