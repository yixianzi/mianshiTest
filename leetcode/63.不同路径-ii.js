/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rowLen = obstacleGrid.length;
  const colLen = obstacleGrid[0].length;

  const dp = new Array(colLen).fill(0);
  for (let i = 0; i < colLen; i++) {
    if (obstacleGrid[0][i] !== 1) {
      dp[i] = 1;
    } else {
      break;
    }
  }

  for (let i = 1; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[j] = 0;
      } else {
        if (j == 0) continue;
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  }

  return dp[colLen - 1];
};
// @lc code=end
