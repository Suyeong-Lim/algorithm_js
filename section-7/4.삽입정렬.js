function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > curr) {
      arr[left + 1] = arr[left]; //swap
      left--;
    }
    arr[left + 1] = curr;
  }

  return arr;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
