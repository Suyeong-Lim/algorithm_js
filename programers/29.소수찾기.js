//1. 주어진 배열의 조합을 구하기
//2. 소수인지 판별하기
function solution(arr) {
  let count = 0;
  let n = arr.length;

  const isPrime = (num) => {
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const num = arr[i] + arr[j] + arr[k];
        if (isPrime(num)) {
          count++;
        }
      }
    }
  }
  let answer = count;

  return answer;
}

let arr = [1, 2, 7, 6, 4];

console.log(solution(arr));
