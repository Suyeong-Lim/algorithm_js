function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((el) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][el - 1] !== 0) {
        let temp = board[i][el - 1];
        board[i][el - 1] = 0;
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(temp);
        }
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
