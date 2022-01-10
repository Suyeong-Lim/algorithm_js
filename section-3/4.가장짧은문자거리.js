function solution(s, t) {
  let p = 1000;
  let arr = [];
  let answer;

  //오른쪽으로 한번
  for (let x of s) {
    //t와 같으면 p를 0으로
    if (x === t) {
      p = 0;
      arr.push(p);
    } else {
      p++;
      arr.push(p);
    }
    //t 와 다르면 p를 ++
  }

  //왼쪽으로 돌면서 체크
  let n = s.length;
  p = 1000;
  for (let i = n - 1; i >= 0; i--) {
    //t와 같으면 p는 0으로
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      arr[i] = Math.min(arr[i], p);
    }
    //t와 다르면 p++하고 arr에 있는 값과 비교해서 작은값을 넣음
  }
  console.log(arr);
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
