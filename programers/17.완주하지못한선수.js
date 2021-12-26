function solution(participant, completion) {
  var answer = "";
  let pH = new Map();

  for (let x of participant) {
    if (pH.has(x)) {
      pH.set(x, pH.get(x) + 1);
    } else {
      pH.set(x, 1);
    }
  }

  for (let x of completion) {
    if (pH.has(x)) {
      pH.set(x, pH.get(x) - 1);
    }
  }

  for (let [k, v] of pH) {
    if (v > 0) {
      answer += k;
    }
  }

  return answer;
}

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];
console.log(solution(participant, completion));
