function solution(str) {

  //정규식
  // answer = str.replace(/[^0-9]/g, "");
  
  let answer = 0;

  //isNaN 숫자판별 함수 사용
  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
