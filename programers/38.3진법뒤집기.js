function solution(n) {
  let answer = 0;

  let hex = n.toString(3);
  let arrHex = Array.from(hex);
  //let test = arrHex.reverse() // .join("");

  //0021
  //3^0*1 +
  //3^1*2 +
  //console.log(arrHex)
  //...
  //3^(3)*e

  //마지막 인덱스 or array.length-1

  const intArr = arrHex.map((e) => parseInt(e));
  // 해당하는 인덱스 번호는 승으로 해주고 인덱스에 해당하는 배열의 엘레먼트 는 곱해준다. 총 lengh 만큼 반복.
  const three = intArr.map((e, i) => 3 ** i * e).reduce((acc, i) => acc + i);
  answer=three
  return answer;
}

n = 45;

console.log(solution(n));
