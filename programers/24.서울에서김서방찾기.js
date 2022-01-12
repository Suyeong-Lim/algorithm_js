function solution(seoul) {
  let answer = "김서방은 ";
  let number = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      number = i;
    }
  }
  //이렇게 indexOf 로도 구할 수있다.
  // let idx = seoul.indexOf("Kim");
  return (answer += number + "에 있다");
}

let seoul = ["Jane", "Kim"];
console.log(solution(seoul));
