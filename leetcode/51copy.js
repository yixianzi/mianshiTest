function fn(n) {
  const results = [];
  function output(oneResult) {
    const arr = oneResult.map((col) => {
      let str = "";
      for (let i = 0; i < n; i++) {
        str += i == col ? "Q" : ".";
      }
      return str;
    });
    results.push(arr);
  }
  function backtracing(row, oneResult) {
    if (row === n) {
      output(oneResult); // 答案条件
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, oneResult)) {
        oneResult[row] = col;
        backtracing(row + 1, oneResult);
        oneResult.splice(row, 1); // 回溯
      }
    }
  }
  backtracing(0, []);
  return results;
}
const a = fn(4);
console.log(a);

function isValid(row, col, oneResult) {
  if (oneResult.findIndex((item, index) => index == row) !== -1) {
    return false;
  }

  if (oneResult.findIndex((i) => i == col) !== -1) {
    return false;
  }

  if (
    oneResult.findIndex((e, index) => {
      if (e == -1) return false;
      const t = Math.abs((index - row) / (e - col));
      return t == 1;
    }) !== -1
  ) {
    return false;
  }
  return true;
}
// console.log(isValid(3, 1, [0, 2]));
