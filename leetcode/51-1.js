const solveNQueens = (n) => {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }
  const res = [];

  const isVaild = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (
          board[i][j] == "Q" &&
          (j == col || i + j == row + col || i - j == row - col)
        ) {
          return false;
        }
      }
    }
  };

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
      if (isVaild(row, col)) {
        board[row][col] = "Q";
        helper(row + 1);
        board[row][col] = ".";
      }
    }
  };
  helper(0);
  return res;
};
