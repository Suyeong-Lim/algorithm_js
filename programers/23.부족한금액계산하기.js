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

/**π‘π‘π‘π‘π‘ μμ  μ’μμ½λμΈλ― !!! νλ‘€ λ΄λ²μλ μ΄λ κ² νμ΄μΌμ§ π‘π‘π‘π‘π‘ 
 * function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
 */
