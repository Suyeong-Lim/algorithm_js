function solution(day, arr) {
  let count = 0;

  for (let i of arr) {
    if (i % 10 === day) count++;
  }
  answer = count;

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
