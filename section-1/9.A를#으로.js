let newString = [];
function solution(s) {
  //정규표현식으로 풀기
  //   let answer;
  //   for (let i = 0; i < s.length; i++) {
  //     answer = s.replace(/A/gi, "#");
  //   }

  //split과 map()으로 풀기
  s = s.split("").map((item) => (item === "A" ? "#" : item));
  return s.join("");
}

let str = "BANANA";
console.log(solution(str));
