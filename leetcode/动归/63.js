var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] == 1) return 0;
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  const dp = new Array(col).fill(1);
  for (let i = 1; i < col; i++) {
    if (obstacleGrid[0][i] == 1) {
      dp[i] = 0;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[j] = 0;
      } else {
        let t = dp[j - 1] ? dp[j - 1] : 0;
        dp[j] = t + dp[j];
      }
    }
  }
  return dp[col - 1];
};
