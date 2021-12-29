function solution(array, commands) {
  var answer = [];

  let temp = 0;

  for (let i = 0; i < commands.length; i++) {
    let startNum = commands[i][0];
    let lastNum = commands[i][1];
    let k = commands[i][2];

    temp = array.slice(startNum - 1, lastNum);
    temp.sort((a, b) => a - b);

    answer.push(temp[k - 1]);
  }

  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];

let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
