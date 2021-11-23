function solution(s, t) {
  let count = 1000;
  let arr = [];
  let n = s.length;

  for (let i = 0; i < n; i++) {
    if (s[i] !== t) {
      count++;
      arr.push(count);
    } else {
      count = 0;
      arr.push(count);
    }
  }

  for (let i = n; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
      arr[i] = 0;
    } else {
      count++;
      arr[i] = Math.min(arr[i], count);
    }
  }

  return arr;
}

let str = "teachermode";
console.log(solution(str, "e"));
