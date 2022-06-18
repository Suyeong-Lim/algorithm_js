//순열 구하는 것보다 더 범위가 큰 함수...

//1, 한개만 고르는 경우 모든 글자를 쪼개서 set 에 넣는다.
//2. 여러개를 고르는 경우 모든 경우의 수를 구해서
//3. 모든 경우의 수를 구하는 방법
//한글자씩 꺼내서 재귀를 반복함. 잘라서 넣고 잘라서 넣고 잘라서 넣기 (슬라이스와 들어온 인덱스 값으로 한글자씩 잘라서 넣을 수있다. )
//result 에 넣는다.

function permute(s, n) {
  if (n === 1) {
    return new Set([...s]);
  }
  const result = new Set();
  for (let i = 0; i < s.length; i++) {
    for (let e of permute(s.slice(0, i) + s.slice(i + 1), n - 1)) {
      result.add(s[i] + e);
    }
  }
  return result;
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 1. 중복 값 허용 x result 변수 만들기

function solution(numbers) {
  const result = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (const e of permute(numbers, i)) {
      result.add(parseInt(e));
    }
  }
  return [...result].filter((n) => n > 1 && isPrime(n)).length;
}

let numbers = "17"; //
console.log(solution(numbers));
