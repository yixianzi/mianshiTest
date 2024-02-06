function fn(n) {
  const results = [];

  function isValid(row, col, oneResult) {
    let lCol = col - 1,
      rCol = col + 1;
    for (let i = row - 1; i >= 0; i--) {
      if (oneResult[i] === col) {
        return false;
      }
      if (oneResult[i] === lCol) {
        return false;
      }
      if (oneResult[i] === rCol) {
        return false;
      }
      lCol--;
      rCol++;
    }
    return true;
  }

  function output(oneResult) {
    console.log(oneResult);
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
    console.log(oneResult);
    if (row === n) {
      output(oneResult);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, oneResult)) {
        oneResult[row] = col;
        backtracing(row + 1, oneResult);
      }
    }
  }

  backtracing(0, []);
  return results;
}

console.log(fn(4));
