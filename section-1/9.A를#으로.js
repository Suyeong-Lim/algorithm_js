let newString = [];
function solution(s) {
  //정규표현식으로 풀기
  //   let answer;
  //   for (let i = 0; i < s.length; i++) {
  //     answer = s.replace(/A/gi, "#");
  //   }

  //split과 map()으로 풀기
  //   s = s.split("").map((item) => (item === "A" ? "#" : item));
  //   return s.join("");

  //for-of로 풀기 . string 은 +하면 그냥 문자열에 추가된다.
  let answer = "";
  for (let i of s) {
    if (i === "A") {
      answer += "#";
    } else answer += i;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
