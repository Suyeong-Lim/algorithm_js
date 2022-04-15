function solution(cards) {
  let answer = 0;

  cards = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ];
  let test = Math.min.apply(null, ...cards);
  // console.log(test);

  cards.forEach(([w, h]) => {
    const maxWidth = Math.max.apply(null, ...cards);
    w = maxWidth;
    // console.log(w);
  });

  let maxOfheight = 0;
  let maxOfwidth = 0;
  cards.forEach(([w, h]) => {
    const [height, width] = [Math.max(w, h), Math.min(w, h)];
    if (height > maxOfheight) maxOfheight = height;
    if (width > maxOfwidth) maxOfwidth = width;
    answer = maxOfheight * maxOfwidth;
  });
  //작은 것 중에서 큰값을 찾아줘야하니 값 비교를 해야함

  //   let min = Math.min.apply(...cards);
  //   let max = Math.max.apply(...cards);
  //   console.log("?", min);
  //   console.log("?", max);

  //   for (let i = 0; i < cards.length; i++) {
  //     if (!maxNum) {
  //       maxNum = cards[i];
  //     }
  //     if (maxNum < cards[i]) {
  //       maxNum = cards[i];
  //     }
  //   }
  //   console.log("maxNum", maxNum);
  //   answer = maxNum[0] * maxNum[1];
  //   console.log("?", answer);
  return answer;
}

cards = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(cards));
