function solution(n) {
  var sum = 0;
  var answer = 0;
  while (n) {
    //sum += n % 10;
    n = Math.floor(n / 10);
    console.log(n);
  }
  answer = sum;
  return answer;
}
let n = 1230;
console.log(solution(n));
