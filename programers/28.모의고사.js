function solution(answers) {
  let answer = [];

  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //student1 과 answer의 답 비교. 같으면 count ++
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (student1[i] === answers[i]) {
      count[0] += 1;
    }
    if (student2[i] === answers[i]) {
      count[1] += 1;
    }
    if (student3[i] === answers[i]) {
      count[2] += 1;
    }
  }

  let max = Math.max.apply(null, count);
  for (let i = 0; i < count.length; i++) {
    if (max === count[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

let answers = [1, 2, 3, 4, 5];

console.log(solution(answers));
