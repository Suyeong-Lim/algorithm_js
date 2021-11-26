function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}

function solution(n) {
  var arr = n.toString().split("");
  var answer = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }

  return answer;
}

let str = 12345;
console.log(solution(str));
