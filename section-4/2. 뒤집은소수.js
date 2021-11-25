function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false; //소수가 아님
    }
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (x of arr) {
    let reverse = 0;

    while (x) {
      reverse *= 10;
      reverse += x % 10;
      x = parseInt(x / 10);
    }
    if (isPrime(reverse)) answer.push(reverse);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
