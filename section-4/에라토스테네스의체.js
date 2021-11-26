function solution(n) {
  let primeNumbers = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let i = 2; i <= n; i++) {
    if (ch[i] === 0) {
      primeNumbers.push(i);
      for (let j = i; j <= n; j += i) {
        ch[j] = 1;
      }
    }
  }
  return primeNumbers;
}

console.log(solution(120));
