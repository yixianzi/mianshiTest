/*
 * @lc app=leetcode.cn id=1976 lang=javascript
 *
 * [1976] 到达目的地的方案数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const matrix = new Array(n).fill(0).map((i) => new Array(n).fill(0));
  const len = roads.length;
  for (let i = 0; i < len; i++) {
    const item = roads[i];
    matrix[item[0]][item[1]] = item[2];
  }
  console.log(matrix);
};
// @lc code=end
const roads = [
  [0, 6, 7],
  [0, 1, 2],
  [1, 2, 3],
  [1, 3, 3],
  [6, 3, 3],
  [3, 5, 1],
  [6, 5, 1],
  [2, 5, 1],
  [0, 4, 5],
  [4, 6, 2],
];
countPaths(7, roads);
