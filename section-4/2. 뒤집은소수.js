function isPrime(num) {
  let flag = true;
  if (num === 1) flag = false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let result = 0;
    while (temp) {
      result *= 10;
      result += temp % 10;
      temp = parseInt(temp / 10);
    }

    if (isPrime(result)) answer.push(result);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
