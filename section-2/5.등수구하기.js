function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let num = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        num++;
      }
    }
    answer.push(num);
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
