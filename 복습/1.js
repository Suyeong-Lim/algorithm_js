function reduce(predicate, val) {
  let result = val;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]);
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];

answer = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
console.log(answer);
