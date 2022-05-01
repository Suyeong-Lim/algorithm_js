//해시
function solutions(jewls, stones) {
  let answer = 0;
  let sH = new Map();

  for (let x of jewls) {
    if (!sH.has(x)) {
      sH.set(x, 1);
    } else {
      sH.set(x, sH.get(x) + 1);
    }
  }
  //보석들 넣으면  => aA

  for (let x of stones) {
    if (sH.has(x)) {
      answer += 1;
    }
  }
  return answer;
}

let jewls = "z";
let stones = "ZZ";

console.log(solutions(jewls, stones));

//2
var numJewelsInStones = function (jewels, stones) {
  return [...stones].filter((stone) => jewels.includes(stone)).length;
};
