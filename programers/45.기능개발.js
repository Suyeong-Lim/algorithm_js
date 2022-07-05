function solution(progresses, speeds) {
  let answer = [0];

  const progress = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  let maxPriority = progress[0];
  for (let i = 0, j = 0; i < progress.length; i++) {
    if (progress[i] <= maxPriority) {
      answer[j] += 1;
    } else {
      maxPriority = progress[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
