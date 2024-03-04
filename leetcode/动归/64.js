var minPathSum = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const dp = new Array(col).fill(grid[0][0]);
  for (let i = 1; i < col; i++) {
    dp[i] = dp[i - 1] + grid[0][i];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j == 0) {
        dp[j] = dp[j] + grid[i][j]
        continue;
      }
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }
  return dp[col -1]
};
