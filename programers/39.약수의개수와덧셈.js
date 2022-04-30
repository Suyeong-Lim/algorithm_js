function solution(left, right) {
  for (let i = left; i <= right; i++) {
    console.log(i);
    let numberOfFactorial = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        numberOfFactorial.push(j);
      }
    }
  }

  return;
}

const left = 13;
const right = 17;

console.log(solution(left, right));
