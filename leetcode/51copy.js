function fn(n) {
  const results = [];
  function backtracing(row, oneResult) {
    console.log(oneResult);
    if (row === n) {
      console.log("xxxxx1", oneResult);
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, oneResult)) {
        oneResult[row] = col;
        backtracing(row + 1, oneResult);
        oneResult.splice(row, 1);
      }
    }
  }
  backtracing(0, []);
}
fn(4);

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
