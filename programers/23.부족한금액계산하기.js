function solution(price, money, count) {
  let answer = 0;
  let sum = 0;
  let check = 0;

  while (count) {
    count--;
    sum += price;
    check += sum;
  }
  if (check - money > 0) {
    answer = check - money;
  }
  if (check === money) answer = 0;

  return answer;
}

let price = 3;
let money = 20;
let count = 4;

console.log(solution(price, money, count));

/**💡💡💡💡💡 완전 좋은코드인듯 !!! 허롤 담번에는 이렇게 풀어야지 💡💡💡💡💡 
 * function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
 */
