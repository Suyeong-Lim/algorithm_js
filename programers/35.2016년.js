function solution(month, day) {
  let answer = 0;

  const monthNumberOfYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let pastDaySum = 0;

  //for문 돌면서 누적 일 계산. 0부터 시작이니까 -1로 값 보정해줌
  for (let i = 0; i < month - 1; i++) {
    pastDaySum += monthNumberOfYear[i];
  }
  pastDaySum += day - 1;
  console.log(pastDaySum);

  switch (pastDaySum % 7) {
    case 0:
      answer = "FRI";
      break;
    case 1:
      answer = "SAT";
      break;
    case 2:
      answer = "SUN";
      break;
    case 3:
      answer = "MON";
      break;
    case 4:
      answer = "TUE";
      break;
    case 5:
      answer = "WED";
      break;
    case 6:
      answer = "THU";
      break;
  }

  return answer;
}

let a = 5;
let b = 24;

console.log(solution(a, b));
