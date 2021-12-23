function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  let n = arr1.length;
  let m = arr2.length;

  //정렬해놓고 투포인터 알고리즘으로 같은경우 답에 push해줌
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    }
  }

  return answer;
}

let a = [1, 3, 9, 4, 2];
let b = [3, 2, 4, 9, 8];
console.log(solution(a, b));
