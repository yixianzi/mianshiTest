const solveNQueens = (n) => {
  const board = new Array(n).fill("").map((i) => new Array(n).fill("."));
  const res = [];
  console.log(board);

  const cols = new Set();
  const dia1 = new Set();
  const dia2 = new Set();

  const helper = (row) => {
    if (row == n) {
      const stringsBoard = board.slice();
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join("");
      }
      res.push(stringsBoard);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !dia1.has(row + col) && !dia2.has(row - col)) {
        board[row][col] = "Q";
        cols.add(col);
        dia1.add(row + col);
        dia2.add(row - col);
        helper(row + 1);
        board[row][col] = ".";
        cols.delete(col);
        dia1.delete(row + col);
        dia2.delete(row - col);
      }
    }
  };
  helper(0);
  return res;
};

const a = solveNQueens(4);
console.log(a);
