function solution(s, t) {
  let answer = 1000;
  let p = 1000;

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  let n = s.length;
  for (let i = n; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      arr[i] = 0;
    } else {
      p++;
      arr[i] = Math.min(arr[i], p);
    }
  }

  return arr;
}

let str = "teachermode";
console.log(solution(str, "e"));
