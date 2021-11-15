function solution(a, b, c) {
  let max;
  let answer;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  if (a + b + c - max > max) {
    answer = "Yes";
  } else {
    answer = "No";
  }
  return answer;
}

console.log(solution(6, 6, 6));
