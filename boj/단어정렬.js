function solution(arr) {
  const answer = Array.from(new Set(arr));

  function compare(a, b) {
    if (a.length === b.length) {
      return (a > b) - (a < b);
    } else {
      return a.length - b.length;
    }
  }

  answer.sort(compare);

  return answer;
}

let arr = [
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
  "im",
  "yours",
];
console.log(solution(arr));
