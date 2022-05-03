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

// 또 다른 코드 feat. rita
function solution2(participants, completions) {
  const map = new Map();

  //완주자를 맵에 등록한다
  for (completion of completions) {
    if (map.has(completion)) {
      map.set(completion, map.get(completion) + 1);
    } else {
      map.set(completion, 1);
    }
  }

  //참가자 배열을 순회하면서, 맵에 등록된 사람인지(완주자인지) 체크한다.
  for (participant of participants) {
    if (map.has(participant)) {
      if (map.get(participant) === 1)
        //동명이인 없으면 삭제 -> 오옹 이거 조아욧 ㅇㅂㅇ
        map.delete(participant);
      else map.set(participant, map.get(participant) - 1); //동명이인 있으면 1명 줄임
    } else return participant;
  }
  //return null;
}
