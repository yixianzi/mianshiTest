/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;

  const dp = new Array(colLength).fill(0);
  for (let i = 0; i < colLength; i++) {
    if (i == 0) {
      dp[i] = grid[0][i];
    } else {
      dp[i] = dp[i - 1] + grid[0][i];
    }
  }

  for (let i = 1; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (j == 0) {
        dp[j] = dp[j] + grid[i][j];
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
      }
    }
  }

  return dp[colLength - 1];
};
// @lc code=end
// const a = minPathSum([
//   [1, 2],
//   [1, 1],
// ]);
// console.log(a);
